// Simple Program that computes the Hash of an input

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow = null

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#2b2b2b",
    show: false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true
    }
  })

  // loads the index.html file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // opens in browser, not inside electron app
  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  // prevents any flickering
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// creates window when ready
app.on('ready', createWindow)

// quits when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// makes sure that double clicking doesn't open 2 instances
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})