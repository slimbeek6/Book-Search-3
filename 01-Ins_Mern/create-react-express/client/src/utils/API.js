import axios from "axios";

export default {
    // Searches for books and displays them
    searchBooks: function() {
        return axios.get("/google");
    },
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    saveBook: function() {
        return axios.put("/api/books/save/" + id);
    }
}