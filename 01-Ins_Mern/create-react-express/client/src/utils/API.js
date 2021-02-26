import axios from "axios";

export default {
    // Searches for books and displays them
    getBooks: function(bookName) {
        return axios.get("/google/"+bookName);
    },
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    saveBook: function(id) {
        return axios.put("/api/books/save/" + id);
    }
}