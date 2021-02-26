const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const db = require("../models");
console.log(db);

// API Routes
router.get("/api/books", (req, res) => {
  db.Book.find({where: {saved: true}})
  .then(books => res.json(books))
  .catch(err => res.status(422).end());
});

router.get("/google/:bookName", (req, res) => {
  const url = "https://www.googleapis.com/books/v1/volumes?q="+req.params.bookName;
  axios.get(url)
  .then(searchres => res.json(searchres.data.items))
  .catch(err => res.status(422).end());
});

router.post("/api/books/:id", (req, res) => {
  db.Book.post({})
  .then()
  .catch(err => res.status(422).end())
});



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;