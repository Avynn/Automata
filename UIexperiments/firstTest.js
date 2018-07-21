const {ipcRenderer} = require('electron')

function draw(ctx){
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
}

window.onload = init;

function init(){
    var canvas = document.getElementById("main");
    var ctx = canvas.getContext('2d');

    draw(ctx);

    ipcRenderer.send("console", "hello world!");

    console.log("hello world!");
}

