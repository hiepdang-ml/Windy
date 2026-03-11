const { app, BrowserWindow } = require("electron");
const path = require("path");

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  let mainWindow = null;

  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1400,
      height: 900,
      autoHideMenuBar: true,
      webPreferences: {
        backgroundThrottling: false,
        preload: path.join(__dirname, "preload.js"),
      },
    });

    mainWindow.loadURL("https://windy.com");

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }

  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(createWindow);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
