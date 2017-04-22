//JS
//Require packages: mysql, express, body-parser
var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var reservationsAll = [];
var waitList = [];

//Connect to the database

var connection = mysql.createConnection({
	 host: "localhost", // connect to the local mysql app on the computer
	 port: 3306,
	 user: "root",
	 password: "pu55ypause!",
	 database: "hotRestaurant" // need to be connecting to a database that exists locally (like in workbench)
});

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
server.post("/reserve/create", function(request, response){
	var reservation = request.body;
	console.log(reservation);
	reservationsAll.push(reservation);
});

server.get("/reserve", function(request, response){
	response.sendFile(path.join(__dirname, "reserve.html"));
});

//Waiting List Page

server.get("/wait", function(request, response){
	response.sendFile(path.join(__dirname, "wait.html"));
});

server.post("/wait/create", function(request, response){
	var list = request.body;
	waitList.push(list);
	console.log(list);
});

//View Tables page
server.get("/view", function(request, response){
	response.sendFile(path.join(__dirname, "view.html"));
});

//Development - Viewing Table API
server.get("/api/tables/reserve", function(request, response){
	return response.json(reservationsAll);
});

server.get("/api/tables/wait", function(request, response){
	return response.json(waitList);
});

//***Routes to get/post data 

//HTML

//Home
//Make Reservation Page

	//form will include: name, time of reservation, party size, phone number

//View tables
	//