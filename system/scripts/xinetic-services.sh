#!/usr/bin/env bash

# Xinetic.OS 2.0 — Service Information
# Displays service status without changing services.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       SERVICE INFORMATION"
echo "================================"

echo
echo "SERVICE MANAGER"

if command -v systemctl >/dev/null 2>&1; then
    echo "Systemd is available."
    echo
    echo "FAILED SERVICES"
    systemctl --failed --no-pager || true
    echo
    echo "ACTIVE SERVICES"
    systemctl list-units --type=service --state=running --no-pager || true
else
    echo "Systemd is not available."
    echo "This may be normal in some environments."
fi

echo
echo "SERVICE CHECK COMPLETE"
echo "================================"
