var books = [{id: 12234, name:"ABC", "author": "DEF"} , {id : 2345, name:"book2", "author": "author2"}];

exports.list = function() {
    return Promise.resolve(books);
}

exports.find = function(id) {
    return Promise.resolve(books.find(function(book) { return book.id == id; }))
}
