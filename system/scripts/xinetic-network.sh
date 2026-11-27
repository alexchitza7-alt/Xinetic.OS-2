#!/usr/bin/env bash

# Xinetic.OS 2.0 — Network Information
# Displays network information without changing settings.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       NETWORK INFORMATION"
echo "================================"

echo
echo "NETWORK INTERFACES"

if command -v ip >/dev/null 2>&1; then
    ip -brief address
else
    echo "The ip command is not available."
fi

echo
echo "NETWORK CONNECTION"

if command -v hostname >/dev/null 2>&1; then
    echo "Hostname: $(hostname)"
fi

if command -v ip >/dev/null 2>&1; then
    ip route show default
fi

echo
echo "DNS CONFIGURATION"

if [ -r /etc/resolv.conf ]; then
    grep '^nameserver' /etc/resolv.conf || echo "No DNS servers listed."
else
    echo "DNS configuration is unavailable."
fi

echo
echo "NETWORK CHECK COMPLETE"
echo "================================"
