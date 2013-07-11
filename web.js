var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

// fs.readFileSync(filename, [options])#
// Synchronous version of fs.readFile. Returns the contents of the filename.
// If the encoding option is specified then this function returns a string. Otherwise it returns a buffer. 
// fs.readFileSync(index.html)
// buf.toString([encoding], [start], [end])

app.get('/', function(request, response) {
  var data = fs.readFileSync("index.html", "utf8");
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
