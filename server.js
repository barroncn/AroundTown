const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
app.use(logger("dev"));

// STATIC ASSETS (served to Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//PASSPORT MIDDLEWARE

//BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//DATABASE
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/aroundTown");

//ROUTES

//START SERVER
const PORT = 8081; //process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
