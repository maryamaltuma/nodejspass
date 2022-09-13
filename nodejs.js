var express = require('express'); 
var app = express();
var fs = require('fs'); 

app.get('/orders', function(req, res){
    fs.readFile(__dirname + "/" + "orders.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API listening at http://%s:%s", host, port)
})
