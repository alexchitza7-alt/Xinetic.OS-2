#!/usr/bin/env bash

# Xinetic.OS 2.0 — Process Information
# Displays running processes without changing them.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       PROCESS INFORMATION"
echo "================================"

echo
echo "SYSTEM ACTIVITY"

if command -v uptime >/dev/null 2>&1; then
    uptime
else
    echo "Uptime information unavailable."
fi

echo
echo "TOP RUNNING PROCESSES"

if command -v ps >/dev/null 2>&1; then
    ps -eo pid,comm,%cpu,%mem --sort=-%cpu | head -n 11
else
    echo "Process information unavailable."
fi

echo
echo "PROCESS COUNT"

if command -v ps >/dev/null 2>&1; then
    ps -e --no-headers | wc -l
else
    echo "Process count unavailable."
fi

echo
echo "PROCESS CHECK COMPLETE"
echo "================================"
