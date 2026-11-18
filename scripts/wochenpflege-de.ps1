param([switch]$CheckOnly, [switch]$SourcesOnly)
$ErrorActionPreference = 'Stop'
$OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$repoRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$stateDir = Join-Path $repoRoot '.pflege'
[IO.Directory]::CreateDirectory($stateDir) | Out-Null
$configFile = Join-Path $stateDir 'werkzeuge.json'
$config = if (Test-Path -LiteralPath $configFile) { Get-Content -LiteralPath $configFile -Raw | ConvertFrom-Json } else { $null }

function Resolve-Tool([string]$name, [string]$fallback) {
    $found = Get-Command $name -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) { return $found.Source }
    if ($fallback -and (Test-Path -LiteralPath $fallback -PathType Leaf)) { return $fallback }
    # App-Updates können Versionspfade verändern; nur installierte Pakete des Benutzers prüfen.
    $packages = @(Get-AppxPackage -Name 'OpenAI.Codex*' -ErrorAction SilentlyContinue)
    foreach ($package in $packages) {
        if ($name -eq 'codex.exe') {
            $candidate = Join-Path $package.InstallLocation 'app\resources\codex.exe'
            if (Test-Path -LiteralPath $candidate -PathType Leaf) { return $candidate }
        }
        if ($name -eq 'node.exe') {
            $foundNode = Get-ChildItem -LiteralPath $package.InstallLocation -Filter node.exe -File -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
            if ($foundNode) { return $foundNode.FullName }
        }
    }
    throw "Werkzeug fehlt: $name. Anmeldung/App-Installation und .pflege/werkzeuge.json pruefen."
}

$nodePath = Resolve-Tool 'node.exe' $config.node
$codexPath = Resolve-Tool 'codex.exe' $config.codex
# Der native Aufruf und alle Dateipfade werden als getrennte Argumente übergeben.
$env:PATH = ([IO.Path]::GetDirectoryName($nodePath)) + ';' + ([IO.Path]::GetDirectoryName($codexPath)) + ';' + $env:PATH
Set-Location -LiteralPath $repoRoot
& $nodePath (Join-Path $PSScriptRoot 'pruefen-de.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Vorpruefung fehlgeschlagen; keine Wochenpflege.' }
if ($CheckOnly) {
    & $codexPath login status
    if ($LASTEXITCODE -ne 0) { throw 'Codex-Anmeldung fehlt.' }
    Write-Output 'Vorpruefung erfolgreich; kein KI-Auftrag oder Quellenlauf gestartet.'
    exit 0
}

$lockFile = Join-Path $stateDir 'wochenpflege.lock'
$lock = $null
try {
    $lock = [IO.File]::Open($lockFile, [IO.FileMode]::OpenOrCreate, [IO.FileAccess]::ReadWrite, [IO.FileShare]::None)
} catch { throw 'Ein anderer Pflegeprozess haelt den exklusiven Lock.' }

$stamp = Get-Date -Format 'yyyy-MM-dd_HHmmss'
$runDir = Join-Path $stateDir ('laeufe\' + $stamp)
[IO.Directory]::CreateDirectory($runDir) | Out-Null
$result = @{ zeit = (Get-Date).ToString('o'); status = 'gestartet'; modus = $(if($SourcesOnly){'nur-quellen'}else{'quellen-und-inhalt'}); codex_erfolg = $false }
try {
    $snapshot = Join-Path $runDir 'vorher'
    [IO.Directory]::CreateDirectory($snapshot) | Out-Null
    foreach ($folder in @('data','docs','prompts')) {
        Copy-Item -LiteralPath (Join-Path $repoRoot $folder) -Destination (Join-Path $snapshot $folder) -Recurse
    }
    foreach ($file in @('README.md','README-de.md','1-de.md','interessante-de.md')) {
        Copy-Item -LiteralPath (Join-Path $repoRoot $file) -Destination $snapshot
    }
    & $nodePath (Join-Path $PSScriptRoot 'quellenmonitor-de.mjs') *> (Join-Path $runDir 'quellen.log')
    if ($LASTEXITCODE -ne 0) { throw 'Quellenmonitor fehlgeschlagen.' }
    if (-not $SourcesOnly) {
        $prompt = Get-Content -LiteralPath (Join-Path $repoRoot 'prompts\WOCHENPFLEGE-de.md') -Raw -Encoding UTF8
        # Keine Hintergrund-Agentenruntime und kein Provisioning: begrenzter Dokumentationsauftrag.
        $prompt | & $codexPath --search --ask-for-approval never exec --ignore-user-config --sandbox workspace-write --color never --cd $repoRoot --output-last-message (Join-Path $runDir 'codex-ergebnis-de.md') - *> (Join-Path $runDir 'codex.log')
        if ($LASTEXITCODE -ne 0) { throw "Codex-Pflege fehlgeschlagen (Exit $LASTEXITCODE); lokales Protokoll pruefen." }
        $result.codex_erfolg = $true
        & $nodePath (Join-Path $PSScriptRoot 'katalog-de.mjs')
        if ($LASTEXITCODE -ne 0) { throw 'Katalogerzeugung fehlgeschlagen.' }
    }
    & $nodePath (Join-Path $PSScriptRoot 'pruefen-de.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Nachpruefung fehlgeschlagen; kein automatischer Reset.' }
    $result.status = 'erfolgreich'
} catch {
    $result.status = 'fehlgeschlagen'
    $result.fehler = $_.Exception.Message
    throw
} finally {
    $result.ende = (Get-Date).ToString('o')
    $result | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $runDir 'status.json') -Encoding UTF8
    $result | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $stateDir 'letzter-lauf.json') -Encoding UTF8
    if ($lock) { $lock.Dispose() }
}
