require('dotenv').config();

const express = require("express"),
      path = require("path"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      PORT = process.env.PORT || 3001,
      app = express(),
      db = require("./database/models"),
      routes = require("./routes"),
      passport = require("passport"),
      session = require("express-session");

require("./passport/passport")(passport, db.User);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
