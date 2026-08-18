#Requires -Version 5.1
<#
.SYNOPSIS
    Canonical VM/production runner — delegates to python main.py run.
    PROJECT-LAYOUT-AUTOMATION-v2.0
#>
param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$MainPy = Join-Path $ProjectRoot "main.py"

if (-not (Test-Path $MainPy)) {
    Write-Error "main.py not found: $MainPy"
    exit 1
}

$PythonExe = $env:PYTHON_EXE
if (-not $PythonExe) {
    $found = Get-Command python -ErrorAction SilentlyContinue
    if ($found -and $found.Source -notlike "*WindowsApps*") { $PythonExe = $found.Source }
}
if (-not $PythonExe) {
    Write-Error "Python not found. Set PYTHON_EXE or install Python 3.12+."
    exit 1
}

$invokeArgs = @($MainPy, "run") + $Args
& $PythonExe @invokeArgs
exit $LASTEXITCODE
