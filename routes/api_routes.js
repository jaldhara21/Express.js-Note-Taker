// Import the required modules
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Read the contents of the "db.json" file and parse it as JSON
// Send the parsed JSON data as the response
router.get("/api/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(dbJson);
});
// Read the contents of the "db.json" file and parse it as JSON
router.post("/api/notes", (req, res) => {
  // Read the contents of the "db.json" file and parse it as JSON
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  // Create a new feedback object with properties from the request body
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  // Add the new feedback object to the array
  // Write the updated array as JSON to the "db.json" file
  // Send the updated JSON data as the response
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  res.json(dbJson);
});

//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete, Read the contents of the "db.json" file,Parse the data as JSON,  Filter out the note with the matching ID
router.delete("/api/notes/:id", (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const dataJSON = JSON.parse(data);
  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });

  // Write the updated notes array as JSON to the "db.json" file, Send a response indicating that the note was deleted
  fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
  res.json("Note deleted.");
});

// Export the router module to make it available for other files
module.exports = router;
