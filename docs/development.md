# Xinetic.OS 2.0 — Development Guide

## 1. Introduction

This guide explains the development structure and workflow for Xinetic.OS 2.0.

Xinetic.OS is an experimental Debian-based Linux distribution.

## 2. Development Environment

The planned development environment includes:

- Debian Linux
- Git
- Bash
- Python 3
- KDE Plasma development tools
- TypeScript and React
- QEMU for virtual machine testing

## 3. Repository Structure

```text
Xinetic.OS-2/
├── .github/
│   └── workflows/
├── docs/
│   ├── architecture.md
│   └── development.md
├── system/
│   ├── config/
│   │   └── os-release
│   └── scripts/
│       ├── README.md
│       ├── xinetic-info.sh
│       ├── xinetic-diagnostics.sh
│       ├── xinetic-hardware.sh
│       ├── xinetic-network.sh
│       ├── xinetic-storage.sh
│       ├── xinetic-battery.sh
│       ├── xinetic-processes.sh
│       ├── xinetic-users.sh
│       ├── xinetic-services.sh
│       └── xinetic-temperature.sh
└── README.md
