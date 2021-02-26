const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
     },
    img: {
        type: String,
        validate: {
            isUrl: true
        }
     },
     author: {
        type: String,
        required: true
     },
     synopsis: {
         type: Text,
         required: true
     },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;