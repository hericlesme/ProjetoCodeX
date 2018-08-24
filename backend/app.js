var express = require("express"),
 	app = express(),
 	fs = require("fs"),
 	mongoose = require("mongoose"),
	options = {
		useNewUrlParser: true
	};

mongoose.connect("mongodb://localhost:27017/code_x", options);

app.get("/", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/home/homeView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("/sobre", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/sobre/sobreView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("/servicos", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/servicos/servicosView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("/equipe", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/equipe/equipeView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("/portfolio", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/portfolio/portfolioView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("/contato", function(req, res) {
	// res.render("homeView.ejs");
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../frontend/app/components/contato/contatoView.html", null, function(error, data) {
		if (error) {
			req.writeHead(404);
			req.write("File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.get("*", function(req, res) {
	res.send("Página não encontrada");
});

app.listen(2018, function() {
	console.log("Servidor Rodando!!");
});


