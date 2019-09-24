const express = require('express');
const app = express();
const config = require('./config');

app.get('/',function(req,res)
{
    res.sendFile('views/index.html', {root: __dirname })
});

app.get('/res/style.css', function(req, res){
    res.sendFile('res/style.css', {root: __dirname});çç
})
var server = app.listen(3000,function(){
    console.log(`Listinig on ${config.portNumber}`);
});

