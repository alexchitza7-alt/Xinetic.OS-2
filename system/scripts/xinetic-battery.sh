#!/usr/bin/env bash

# Xinetic.OS 2.0 — Battery Information
# Displays battery and power information when available.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "       BATTERY INFORMATION"
echo "================================"

BATTERY_DIR="/sys/class/power_supply"
FOUND_BATTERY=false

echo

if [ -d "$BATTERY_DIR" ]; then
    for battery in "$BATTERY_DIR"/*; do
        [ -d "$battery" ] || continue

        TYPE=$(cat "$battery/type" 2>/dev/null || true)

        if [ "$TYPE" = "Battery" ]; then
            FOUND_BATTERY=true
            echo "Battery: ${battery##*/}"

            if [ -r "$battery/capacity" ]; then
                echo "Charge: $(cat "$battery/capacity")%"
            fi

            if [ -r "$battery/status" ]; then
                echo "Status: $(cat "$battery/status")"
            fi

            echo
        fi
    done
fi

if [ "$FOUND_BATTERY" = false ]; then
    echo "No battery information available."
    echo "This is normal on desktop computers."
fi

echo "BATTERY CHECK COMPLETE"
echo "================================"
