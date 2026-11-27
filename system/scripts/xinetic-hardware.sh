#!/usr/bin/env bash

# Xinetic.OS 2.0 — Hardware Information
# Displays hardware details without changing system settings.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       HARDWARE INFORMATION"
echo "================================"

echo
echo "PROCESSOR"

if command -v lscpu >/dev/null 2>&1; then
    lscpu | grep -E 'Model name|Architecture|CPU\(s\)' || true
else
    echo "lscpu is not available."
fi

echo
echo "MEMORY"

if command -v free >/dev/null 2>&1; then
    free -h
else
    echo "Memory information is unavailable."
fi

echo
echo "STORAGE"

if command -v lsblk >/dev/null 2>&1; then
    lsblk -o NAME,SIZE,TYPE,MODEL
else
    echo "lsblk is not available."
fi

echo
echo "GRAPHICS"

if command -v lspci >/dev/null 2>&1; then
    lspci | grep -Ei 'VGA|3D|Display' || echo "No graphics device listed."
else
    echo "lspci is not available."
fi

echo
echo "HARDWARE CHECK COMPLETE"
echo "================================"
