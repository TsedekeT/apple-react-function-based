// Initiate the express router and import the controller functions
const express = require("express");
const { createTables, addIphones, getIphones } = require("../controllers/iphoneController");

const router = express.Router();

// Route to create tables if they don't exist
router.get("/install", createTables);

// Route to add new iPhones
router.post("/addiphones", addIphones);

// Route to fetch all iPhones
router.get("/iphones", getIphones);

module.exports = router;
