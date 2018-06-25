const electron = require ('electron');


function createWindow() {
    //create window
    win = new electron.BrowserWindow({width: 800, height: 600});

    //load index
    win.loadFile('index.html');
}

electron.app.on('ready', createWindow);