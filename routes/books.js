var express = require("express");
var router = express.Router();
var booksModule = require('../middleware/books');

router.param("bookid", function(req, res, next, id) {
    booksModule.find(id).then(function(book) {
        if (!book) {
            next(new Error("No book found with the given id "+id));
        }
        req.book = book;
        next();
    }, function(error) {
        console.error(error);
        next(error);
    });
});

router.get('/list.:format?', function(req, res, next) {
    booksModule.list().then(function(books) {
        if (req.params.format == 'json') {
            res.status(200).send(books);
        } else {
            res.render('books.jade', {books : books});
        }
    });
});

router.get("/:bookid/edit.:format?", function(req, res, next) {
    res.status(200).send(req.book);
});

router.post('/new.:format?', function(req, res, next) {
    
});

module.exports = router;