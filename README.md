# Eros Samsung Flasher

Eros is a lightweight Android app designed to flash firmware on Samsung devices via OTG. No root is required, and it supports all architectures, that is, arm64-v8a, armeabi-v7a, x86, and x86_64. Eros can also run on Android TVs that support the USB Host API.

## Features

- **Flash tar and tar.md5**: Flash firmware files directly on a connected Samsung device via OTG.
- **Reboot to System**: Reboot the connected device back to the system.
- **MD5 Check**: Checks the integrity of firmware files by verifying their MD5 checksum.
- **Userdata Erase**: Forcefully recreates the device's userdata partition, wiping its data.
- **TFlash Support**: Flash firmware onto the SD card connected to the device, wiping the SD card in the process.
- **AB Partition Support**: Choose which partition to flash on A/B partition devices.
- **Auto Reboot Switches**: Control whether the device reboots automatically after flashing.

## How to Use

1. **Install Eros**: Download and install the app on your Android device or TV.
2. **Connect via OTG**: Connect your Samsung device in Download mode using an OTG adapter.
3. **Select Firmware**: Load `.tar` or `.tar.md5` files for flashing.
4. **Flash**: Tap the flash button and Eros will handle the firmware installation.
5. **Reboot**: The device will reboot back to the system after the process completes.

## Supported Devices

Eros works with Samsung devices that use the Odin3 protocol, and also supports devices with real A/B partitions (currently A36, A55, S25 and newer).

## Support
Telegram Channel: https://t.me/ErosMobileTool
You can join the support chat from within the channel.
