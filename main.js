const {app, BrowserWindow} = require("electron");

let ventana;
function createWindow(){
    ventana = new BrowserWindow({
        width: 600,
        height: 800,
    });
    ventana.loadFile("index.html")
}

app.whenReady().then(createWindow)