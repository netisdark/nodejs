//Read a file
/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('mynewfile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);*/
//Url Reading 
/*"var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);*/
// URL Advance reading 
/*var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);*/
//For creating new files
/*var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/
//Editing of files
/*var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
*/
//console.log("Your server is live at http://127.0.0.1:8080");
var http=require('http');
http.createServer( function (req,res){
    res.write("hello");
    res.end();
}).listen(3000);