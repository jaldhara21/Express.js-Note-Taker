const express = require("express");
const html_routes = require("./routes/html-routes");
const api_routes = require("./routes/api_routes");

//Creating environment variable port
const PORT = process.env.PORT || 3001;

// Create an instance of express
const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware to serve static files from the "public" directory
app.use(express.static("public"));
//Middleware to handle HTML,API routes
app.use(api_routes);
app.use(html_routes);

//Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
