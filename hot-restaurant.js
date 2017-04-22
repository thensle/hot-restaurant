//JS
//Require packages: mysql, express, body-parser
// var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Connect to the database

//Create and connect server

var server = express();
var port = 8080;

//Configuration set-up
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.text());
server.use(bodyParser.json({type: "application/vnd.api+json"}));

//Listener on port

server.listen(port, function(){
	console.log("Listening on port: " + port);
});

//Routes to each page
//Home page
server.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "home.html"));
});

//Reservation Page
server.get("/reserve", function(request, response){
	response.sendFile(path.join(__dirname, "reserve.html"));
})

//View Tables page
server.get("/view", function(request, response){
	response.sendFile(path.join(__dirname, "view.html"));
});

//Development - Viewing Table API
server.get("/api/tables", function(request, response){
	var obj = {
		name: "Xasey",
		time: "10:51am",
		phoneNumber: "555-236-6234",
		partySize: 100
	};

	return response.json(obj);
});

//***Routes to get/post data 

//HTML

//Home
//Make Reservation Page

	//form will include: name, time of reservation, party size, phone number

//View tables
	//