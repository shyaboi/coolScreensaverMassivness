// Dependencies
var http = require("http");
var fs = require("fs");
var path = require("path")

// Set our port to 8080
var PORT = 3000;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server


  // Here we use the fs package to read our index.html file
  function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
    default:
        return fs.readFile(__dirname + "/index.html", function(err, data) {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
    }
    }


// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
