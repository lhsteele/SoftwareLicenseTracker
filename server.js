const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

// Route Imports
// const userIds = require("./routes/api/userIds")


// DB Connection
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
// app.use("/api/users", userIds)



// Server Config
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));