import axios from "axios";

export default {
    // Searches for books and displays them
    searchBooks: function() {
        return axios.get("/api/books/" + query);
    },
    getSavedBooks: function() {
        return axios.get("/api/books/saved");
    },
    saveBook: function() {
        return axios.put("/api/books/save/" + id);
    },
    unSaveBook: function() {
        return axios.put("/api/books/unsave/" + id);
    }
}