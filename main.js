'use strict';


var app = require('app');
var BrowserWindow = require('browser-window');


var mainWindow = null;


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 550,
        resizable: false,
        width: 900
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});