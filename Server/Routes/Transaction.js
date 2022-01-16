const express = require("express");
const router = express.Router();
// Load controllers
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../Controller/Transaction");

router.get("/", getTransactions);
router.post("/", addTransactions);
router.delete("/:id", deleteTransactions);

module.exports = router;
