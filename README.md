# Screen Object Pattern - MobileWright Basics

This project demonstrates a simple implementation of the Screen Object pattern with MobileWright to automate a YouTube scenario on Android.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm
- Android Studio (or a connected Android device)
- An available Android emulator (the current config uses Pixel_4)

## 1) Clone the project

```powershell
git clone https://github.com/zouhairElMa/MobileWright-YouTube-APP-Automation_Test.git
cd MobileWright-YouTube-APP-Automation_Test
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
npm run test:youtubeRegression
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

