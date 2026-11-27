#!/usr/bin/env bash

# Xinetic.OS 2.0 — User Information
# Displays the current user and active sessions.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "        USER INFORMATION"
echo "================================"

echo
echo "CURRENT USER"

if command -v whoami >/dev/null 2>&1; then
    echo "Username: $(whoami)"
fi

echo
echo "USER ID"

if command -v id >/dev/null 2>&1; then
    id
fi

echo
echo "HOME DIRECTORY"
echo "${HOME:-Unavailable}"

echo
echo "ACTIVE SESSIONS"

if command -v who >/dev/null 2>&1; then
    who
else
    echo "Session information unavailable."
fi

echo
echo "USER CHECK COMPLETE"
echo "================================"
