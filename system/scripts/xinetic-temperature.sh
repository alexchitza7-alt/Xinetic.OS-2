#!/usr/bin/env bash

# Xinetic.OS 2.0 — Temperature Information
# Displays hardware temperatures when supported.

set -u

echo "================================"
echo "       XINETIC.OS 2.0"
echo "      TEMPERATURE INFORMATION"
echo "================================"

echo
echo "HARDWARE TEMPERATURES"

if command -v sensors >/dev/null 2>&1; then
    sensors
else
    echo "The sensors command is not installed."
    echo "On Debian, it is provided by the lm-sensors package."
fi

echo
echo "THERMAL ZONES"

if [ -d /sys/class/thermal ]; then
    found_zone=false

    for zone in /sys/class/thermal/thermal_zone*; do
        [ -r "$zone/temp" ] || continue

        found_zone=true
        temperature=$(cat "$zone/temp")

        if [[ "$temperature" =~ ^[0-9]+$ ]]; then
            printf '%s: %s°C\n' "${zone##*/}" "$((temperature / 1000))"
        else
            echo "${zone##*/}: Reading unavailable"
        fi
    done

    if [ "$found_zone" = false ]; then
        echo "No thermal zones available."
    fi
else
    echo "Thermal information is unavailable."
fi

echo
echo "TEMPERATURE CHECK COMPLETE"
echo "================================"
