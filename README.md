# Windy Desktop App

A lightweight desktop wrapper for **Windy.com** built with Electron.
This application keeps the Windy map animation running even when the window is unfocused, making it suitable for use on a secondary monitor as a live weather dashboard.

---

## Features

* Runs Windy as a standalone macOS desktop app
* Prevents animation freezing when the window loses focus
* Fullscreen support for second-screen dashboards
* Custom app icon
* Minimal Electron wrapper (no heavy frontend framework)

---

## Requirements

* Node.js (>= 18 recommended)
* npm
* macOS (Apple Silicon)

Check installation:

```bash
node -v
npm -v
```

---

## Clone the Repository

```bash
git clone git@github.com:hiepdang-ml/Windy.git
cd Windy
```

---

## Install Dependencies

```bash
npm install
```

This installs:

* Electron
* Electron Forge (packaging toolchain)

---

## Run the App in Development Mode

```bash
npm start
```

This launches the Electron window directly.

---

## Build the macOS Application

To package the app into a macOS `.app` bundle:

```bash
npm run package
```

The compiled application will appear in:

```
out/Windy-darwin-arm64/Windy.app
```

You can launch it with:

```bash
open out/Windy-darwin-arm64/Windy.app
```

or drag it into `/Applications`.

---

## Project Structure

```
Windy/
├── main.js          # Electron main process
├── preload.js       # Script that prevents visibility throttling
├── assets/
│   └── icon.icns    # macOS application icon
├── package.json
└── README.md
```

---

## Notes

* The preload script overrides browser visibility signals to prevent the Windy animation from pausing when the window loses focus.
* Electron Forge is used to package the application into a macOS `.app` bundle.

---

## License

MIT
