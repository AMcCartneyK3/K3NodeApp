var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello K3!");
});

app.listen(4000);