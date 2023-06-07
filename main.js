const { app, BrowserWindow } = require('electron')

// var electron= require('electron')
// var app=electron.app
// var BrowserWindow=electron.BrowserWindow


const path = require('path')
const remote = require("@electron/remote/main");
remote.initialize()

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // autoHideMenuBar: true,
    // title:'在main.js中设置的title',
    // icon:'./lg.ico'
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  remote.enable(mainWindow.webContents)
  mainWindow.loadFile('page/index.html')
  mainWindow.webContents.openDevTools()
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
