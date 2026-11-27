#!/usr/bin/env bash

# Xinetic.OS 2.0 — System Diagnostics

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       SYSTEM DIAGNOSTICS"
echo "================================"

echo
echo "SYSTEM INFORMATION"

echo "Hostname: $(hostname)"
echo "Kernel: $(uname -r)"
echo "Architecture: $(uname -m)"

echo
echo "AVAILABLE COMMANDS"

for command_name in bash python3 uname hostname; do
    if command -v "$command_name" >/dev/null 2>&1; then
        echo "[OK] $command_name"
    else
        echo "[MISSING] $command_name"
    fi
done

echo
echo "DIAGNOSTICS COMPLETE"
echo "================================"
