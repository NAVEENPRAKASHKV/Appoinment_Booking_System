const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController");

router.get("/slots", BookController.get_book);
router.post("/book", BookController.bookAppoinment);

module.exports = router;
