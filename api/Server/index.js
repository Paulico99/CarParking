'use strict';
const SerialPort = require('serialport');
var express = require('express');
var router = express.Router();
var firebase=require("firebase");

var config = {
    apiKey: "AIzaSyA77zKGBvl7O81Wuh-u0Bhbax5HMhJXh3k",
    authDomain: "parking-2464b.firebaseapp.com",
    databaseURL: "https://parking-2464b.firebaseio.com",
    projectId: "parking-2464b",
    storageBucket: "",
    messagingSenderId: "982360187100"
  };
  firebase.initializeApp(config);

var db=firebase.database();

const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort('COM3', {
    baudRate: 115200,
    dataBits: 8, 
    parity: 'none', 
    stopBits: 1, 
    flowControl: false 
});

mySerial.on('open', function () {
    console.log('Opened Serial Port');
});

/*mySerial.on('data', function(data){
    var json = JSONize(data.toString());

    //var jsontext = JSON.stringify(data.toString());
    //var obj = JSON.parse(JSONize(jsontext));
    //var obj =JSON.stringify(eval('('+data.toString()+')'));
    //console.log(obj);
    //db.ref('/parking').push(json);
});*/

var received = "";
mySerial.on('data', function(data){
    received += data.toString();
    if(received.length > 32){
        db.ref('/parking/'+'-LFRJ1EjTAIwbFdgVCzZ').set(JSON.parse(received));
        console.log(JSON.parse(received));
        received = "";
    }
})

mySerial.on('err', function(){
console.log(err.message);
});

function JSONize(str) {
    return str
      // wrap keys without quote with valid double quote
      .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'})    
      // replacing single quote wrapped ones to double quote 
      .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})         
  }