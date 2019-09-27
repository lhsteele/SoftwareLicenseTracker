const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

const License = require('./models/License');

// Route Imports
const licenses = require("./routes/api/licenses")


// DB Connection
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  const license = new License({
    user: "Lisa Steele",
    username: "lisahsteele",
    license: "Figma",
    cost: 100.00
  })
  license.save()
  res.send("hello world")
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use("/api/licenses", licenses)



// Server Config
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));