# Screen Object Pattern - MobileWright Basics

This project demonstrates a simple implementation of the Screen Object pattern with MobileWright to automate a YouTube scenario on Android.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm
- Android Studio (or a connected Android device)
- An available Android emulator (the current config uses Pixel_4)

## 1) Clone the project

```powershell
git clone https://github.dxc.com/zelmattad/Screen_Object_Pattern_MobileWright_Basics.git
cd Screen_Object_Pattern_MobileWright_Basics
```

## 2) Install dependencies

```powershell
npm install
```

## 3) Check the MobileWright environment

```powershell
npx mobilewright doctor
npx mobilewright devices
```

If this is your first run, also install the MobileWright agent on the target device/emulator:

```powershell
npx mobilewright install
```

## 4) Run the tests

Run all tests:

```powershell
npx mobilewright test
```

Run only the YouTube scenario:

```powershell
npm tun test:youtubeRegression
```

## 5) Open the report

```powershell
npx mobilewright show-report
```

## Configuration used

The configuration lives in mobilewright.config.ts:

- platform: android
- deviceName: Pixel_4
- timeout: 6000000 ms

If you use a different device/emulator, adjust deviceName in this file.

## Documentation

Two in-depth guides to the Screen Object Pattern implementation are available:

- `SOP_Mobilewright_DXC_Guide_EN.pdf` — English version
- `SOP_Mobilewright_DXC_Guide.pdf` — French version

