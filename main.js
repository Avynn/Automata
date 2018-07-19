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

function main(){
    createWindow();

}

electron.app.on('ready', main);