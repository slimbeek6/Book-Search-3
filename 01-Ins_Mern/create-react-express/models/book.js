const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
     },
    img: {
        type: String,
        required: true
     },
     author: {
        type: String,
        required: true
     },
     synopsis: {
         type: String,
         required: true
     },
     saved: {
         type: Boolean,
         default: false
     }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;