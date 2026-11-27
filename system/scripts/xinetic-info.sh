#!/usr/bin/env bash

# Xinetic.OS — System Information
# Displays basic information about the computer.

clear

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       BEYOND THE DESKTOP"
echo "================================"

echo
echo "System:"
if [ -f /etc/os-release ]; then
    PRETTY_NAME=$(. /etc/os-release && printf '%s' "$PRETTY_NAME")
    echo "OS: $PRETTY_NAME"
fi

echo "Kernel: $(uname -r)"
echo "Architecture: $(uname -m)"
echo "Hostname: $(hostname)"

echo
echo "================================"
echo "       XINETIC SYSTEM INFO"
echo "================================"
