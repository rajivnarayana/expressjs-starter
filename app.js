var express = require('express');
var path = require("path");
var app = express();
var booksRouter = require('./routes/books');

app.set("view engine","jade");
app.set("views", path.join(__dirname, "views"));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/books', booksRouter);

app.use(function(error, req, res, next) {
    if (req.url && req.url.endsWith(".json")) {
        res.status(error.code || 500).send({error: error.message});
        return;
    }
    res.status(error.code || 500).send('<pre>'+error.stack+'</pre>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
