const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

// Import routes
const iphoneRoutes = require("./routes/iphoneRoutes");

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Use product routes
app.use("/api", iphoneRoutes);

// Start the server
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
