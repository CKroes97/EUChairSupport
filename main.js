const { app, BrowserWindow } = require('electron')
const path = require('path')

//set up window
function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})