// grab the packages we need
var express = require('express');
var fetch = require('node-fetch');
var request = require('request');
var app = express();
var port = process.env.PORT || 6969;

app.get('/get', function(req, res) {
    var domain = req.param('domain');
    request('https://www.virustotal.com/ui/domains/'+domain+'/subdomains', function (error, response, body) {
      res.send(response.body)
    });
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);