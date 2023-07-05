// Import the required modules
const router = require("express").Router();
const path = require("path");

// Handle GET requests to the '/notes' route
// Send the notes.html file located in the "public" directory
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Send the index.html file located in the "public" directory
router.get("*", (req, res) => {
  // Send the index.html file located in the "public" directory
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export the router module to make it available for other files
module.exports = router;
