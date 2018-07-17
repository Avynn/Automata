const electron = require ('electron');
const libarary = require('./definitionModules/library.js');

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

function initLib(){
    return new libarary();
}

function main(){
    createWindow();
    var Library = new Library()

}

electron.app.on('ready', main);