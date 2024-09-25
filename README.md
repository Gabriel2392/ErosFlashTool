# Eros Samsung Flasher

Eros is a lightweight Android app (3MB) designed to flash firmware on Samsung devices via OTG. No root is required, and it supports multiple architectures, including arm64-v8a, armeabi-v7a, x86, and x86_64. Eros can also run on Android TVs that support the USB Host API.

## Features

- **Flash tar and tar.md5**: Flash firmware files directly on a connected Samsung device via OTG.
- **Download (Dump) PIT Partition**: Retrieve the device’s PIT partition and save it as a file.
- **Reboot to System**: Reboot the connected device back to the system.
- **MD5 Check**: Ensure the integrity of firmware files by verifying their MD5 checksum.
- **Nand Erase**: Forcefully recreates the device's userdata partition, wiping its data.
- **Automatic Repartitioning**: Automatically repartitions the device when all 4 firmware files (AP, BL, CP, CSC) are selected. Note: CSC must be used, not Home CSC.
- **TFlash Support**: Flash firmware onto the SD card connected to the device, wiping the SD card in the process.
- **Skip MD5 Check**: Optionally skip MD5 verification to speed up the flashing process.
- **AB Partition Support**: Choose which partition to flash on A/B partition devices.
- **Auto Reboot Switches**: Control whether the device reboots automatically after flashing.

## Key Details

- **Size**: 3MB
- **No Root Required**: Works without root access.
- **Supported Architectures**: arm64-v8a, armeabi-v7a, x86, x86_64.
- **Android TV Support**: Eros may work on Android TVs that have the USB Host API.

## How to Use

1. **Install Eros**: Download and install the app on your Android device or TV (with USB Host API support).
2. **Connect via OTG**: Connect your Samsung device in Download mode using an OTG adapter.
3. **Select Firmware**: Load `.tar` or `.tar.md5` files for flashing.
4. **Flash**: Tap the flash button and Eros will handle the firmware installation.
5. **Reboot**: The device will reboot back to the system after the process completes.

## Supported Devices

Eros works with Samsung devices that accept `.tar` and `.tar.md5` firmware files and supports devices with A/B partitions (currently A55 and M55).
