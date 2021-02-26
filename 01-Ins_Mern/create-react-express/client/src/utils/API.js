import axios from "axios";

export default {
    // Searches for books and displays them
    getBooks: function() {
        return axios.get("/google");
    },
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    saveBook: function(id) {
        return axios.put("/api/books/save/" + id);
    }
}