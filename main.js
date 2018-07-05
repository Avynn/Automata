const electron = require ('electron');

function printmsg(_, msg) {
    console.log(msg);
}

function createWindow() {
    //create window
    win = new electron.BrowserWindow({width: 800, 
                                height: 600,
                                webPreferences: {
                                    devTools: true
                                }});

    win.webContents.openDevTools();

    //load index
    win.loadFile('index.html');
}

electron.ipcMain.on("console", printmsg);

electron.app.on('ready', createWindow);