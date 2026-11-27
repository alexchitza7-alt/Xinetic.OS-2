#!/usr/bin/env bash

# Xinetic.OS 2.0 — Storage Information
# Displays storage information without modifying disks.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       STORAGE INFORMATION"
echo "================================"

echo
echo "DISK SPACE"

if command -v df >/dev/null 2>&1; then
    df -h
else
    echo "The df command is not available."
fi

echo
echo "STORAGE DEVICES"

if command -v lsblk >/dev/null 2>&1; then
    lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT
else
    echo "The lsblk command is not available."
fi

echo
echo "STORAGE CHECK COMPLETE"
echo "================================"
