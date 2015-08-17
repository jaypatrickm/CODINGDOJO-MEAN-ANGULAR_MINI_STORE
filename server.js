//=======================================================
//Project: Angular_Mini_Store -- server.js by JM 5.28.15
//=======================================================

//=======================================================
//requires: path, express
//=======================================================
var express = require("express");
var path = require("path");
var app = express();
//=======================================================

//=======================================================
//app setup : set server, 
//=======================================================
var server = app.listen(5555, function() { console.log("listening on port 5555") });
//=======================================================

app.use(express.static(__dirname + '/static'));
//=======================================================
//local routes
app.get('/', function(req, res) 
	{
		// res.render('/partials/orders');
	})