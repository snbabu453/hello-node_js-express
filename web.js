var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Testing deploy code from new github');
});

app.listen(process.env.PORT || 3000);
