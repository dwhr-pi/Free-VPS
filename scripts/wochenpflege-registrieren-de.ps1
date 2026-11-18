param([switch]$Disable)
$ErrorActionPreference = 'Stop'
$repoRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$taskName = 'Free-VPS-Wochenpflege'
if ($Disable) {
    Disable-ScheduledTask -TaskName $taskName | Out-Null
    Write-Output 'Wochenpflege deaktiviert; Dateien und Sicherungen bleiben erhalten.'
    exit 0
}
$stateDir = Join-Path $repoRoot '.pflege'
[IO.Directory]::CreateDirectory($stateDir) | Out-Null
$node = (Get-Command node.exe -ErrorAction Stop).Source
$codex = (Get-Command codex.exe -ErrorAction Stop).Source
@{node=$node;codex=$codex} | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $stateDir 'werkzeuge.json') -Encoding UTF8
$runner = Join-Path $PSScriptRoot 'wochenpflege-de.ps1'
$shellPath = Join-Path $env:WINDIR 'System32\WindowsPowerShell\v1.0\powershell.exe'
$argument = '-NoProfile -NonInteractive -WindowStyle Hidden -File "' + $runner + '"'
$existing = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existing) {
    $expected = @($existing.Actions | Where-Object { $_.Execute -eq $shellPath -and $_.Arguments -eq $argument })
    if ($expected.Count -ne 1 -or @($existing.Actions).Count -ne 1) { throw 'Gleichnamige fremde Aufgabe vorhanden; nicht ueberschrieben.' }
    Write-Output 'Passende Wochenpflege existiert bereits; keine Doppelregistrierung.'
} else {
    $action = New-ScheduledTaskAction -Execute $shellPath -Argument $argument -WorkingDirectory $repoRoot
    $trigger = New-ScheduledTaskTrigger -Weekly -WeeksInterval 1 -DaysOfWeek Monday -At '09:00'
    $user = [Security.Principal.WindowsIdentity]::GetCurrent().Name
    $principal = New-ScheduledTaskPrincipal -UserId $user -LogonType Interactive -RunLevel Limited
    $settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Hours 1) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Principal $principal -Settings $settings -Description 'Woechentliche oeffentliche VPS-Recherche und deutsche Dokumentationspflege samt OpenClaw-Codex-Prompt. Keine Kontoregistrierung oder Infrastrukturaktion.' | Out-Null
}
$task = Get-ScheduledTask -TaskName $taskName
$info = Get-ScheduledTaskInfo -TaskName $taskName
@{task=$taskName;zustand=[string]$task.State;naechster_lauf=$info.NextRunTime.ToString('o');zeitzone=(Get-TimeZone).Id;rechner=$env:COMPUTERNAME;hinweis='Interaktiver Benutzer muss angemeldet sein; Internet, Codex-Anmeldung und Nutzung erforderlich. Noch kein semantischer Wochenlauf dadurch bewiesen.'} | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $repoRoot 'berichte\wochenpflege-status-de.json') -Encoding UTF8
$task | Select-Object TaskName,State
$info | Select-Object NextRunTime,LastTaskResult
