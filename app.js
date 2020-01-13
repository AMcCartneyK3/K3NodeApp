var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Hello K3, SkyNet here for your bidding!");
});

app.use('/',router);

app.listen(3000);