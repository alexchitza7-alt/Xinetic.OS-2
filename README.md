
# Xinetic.OS 2.0

### An Experimental Linux Distribution

**Beyond the Desktop.**

Xinetic.OS 2.0 is an independent Linux distribution project focused on building a modern, customizable desktop operating system.

The project aims to combine the flexibility of Debian Linux with a distinctive desktop experience, custom applications, and useful system utilities.

---

## Project Overview

The long-term goal is to create a complete, bootable Linux distribution with:

- A customized KDE Plasma desktop
- Xinetic system utilities
- A centralized software centre
- Custom desktop themes and wallpapers
- A downloadable, bootable ISO image

Xinetic.OS 2.0 is currently in early development.

## Core Features and Objectives

- **Desktop Environment** — KDE Plasma with planned Xinetic customization.
- **System Information** — Tools for viewing operating system details.
- **Hardware Monitoring** — Hardware, memory, storage, and temperature information.
- **Network Information** — Network interface and connection details.
- **Process Monitoring** — Information about running processes.
- **Service Monitoring** — Read-only Linux service information.
- **Software Centre** — A planned application management experience.
- **Customization** — A consistent graphite, white, and silver visual identity.

## Required Components

### Proposed Hardware Requirements

These are initial development targets and have not been officially tested.

| Component | Proposed Requirement |
|---|---|
| Processor | 64-bit x86_64 CPU |
| Memory | 4 GB RAM minimum |
| Storage | 20 GB available space |
| Graphics | GPU supporting KDE Plasma |
| Display | 1280 × 720 or higher |
| Internet | Recommended |

### Development Software

| Software | Purpose |
|---|---|
| Debian Linux | Distribution foundation |
| Git | Version control |
| Bash | System scripting |
| Python 3 | System utilities |
| Node.js and npm | Application development tools |
| TypeScript | Application development |
| React | User interface development |
| KDE Plasma | Desktop environment |
| QEMU | Virtual machine testing |

## Technology Stack

| Technology | Role |
|---|---|
| Debian Linux | Linux distribution foundation |
| KDE Plasma | Desktop environment |
| TypeScript | Application development |
| React | User interface |
| Python | System utilities |
| Bash | System automation |
| Rust / C | Potential future low-level components |

## System Utilities

The repository currently includes these scripts:

| Script | Purpose |
|---|---|
| `xinetic-info.sh` | System information |
| `xinetic-diagnostics.sh` | System diagnostics |
| `xinetic-hardware.sh` | Hardware information |
| `xinetic-network.sh` | Network information |
| `xinetic-storage.sh` | Storage information |
| `xinetic-battery.sh` | Battery information |
| `xinetic-processes.sh` | Running processes |
| `xinetic-users.sh` | User information |
| `xinetic-services.sh` | Service information |
| `xinetic-temperature.sh` | Temperature information |

## Desktop Environment

Xinetic.OS 2.0 is planned to use KDE Plasma as its desktop foundation.

### Desktop Goals

- Custom application launcher
- Taskbar and system tray
- Movable application windows
- Desktop widgets
- Custom window decorations
- Official Xinetic wallpaper
- Graphite, white, and silver theme

The desktop customization is under development and is not yet fully implemented.

## Software Centre

A React and TypeScript software-centre preview is available through GitHub Pages.

It currently demonstrates:

- Application discovery
- Search and categories
- An installed-applications view
- Sample application management

The current version is a web preview. It does not install real Linux packages.

## Design Philosophy

Xinetic.OS 2.0 follows a clean, modern visual direction:

- Graphite background: `#101419`
- Charcoal surfaces: `#191F26`
- Pure white details: `#FFFFFF`
- Silver highlights: `#C8D0D8`
- Minimalist typography
- Consistent interface components
- Subtle animations and transitions

## Development Roadmap

1. **Architecture and Infrastructure** — Establish the project structure.
2. **System Utilities** — Develop and validate system scripts.
3. **Desktop Development** — Customize the KDE Plasma experience.
4. **Software Centre** — Develop the application management system.
5. **System Integration** — Integrate Linux services and applications.
6. **Distribution Configuration** — Configure the Debian foundation.
7. **ISO Development** — Build a reproducible, bootable ISO.
8. **Testing and Validation** — Test the system in virtual machines.

## Project Status

**Status: Early Development**

Currently available:

- Project documentation and architecture
- Ten system utility scripts
- Shell script validation workflow
- React and TypeScript software-centre preview
- Initial KDE colour scheme
- Official desktop wallpaper

Not yet implemented:

- Complete customized KDE desktop
- Real Linux package installation through the software centre
- Bootable Xinetic.OS ISO

Features will only be marked complete after they have been built and tested.

## License

License information will be added once the project's licensing terms have been established.

---

**Xinetic.OS 2.0**

*Beyond the Desktop.*
