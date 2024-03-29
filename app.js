var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("landing");
});
app.get("/events", function (req, res) {
  res.render("events");
});
app.get("/hackathon", function (req, res) {
  res.render("hackathon");
});
app.get("/makeathon", function (req, res) {
  res.render("makeathon");
});
app.get("/paperpresentation", function (req, res) {
  res.render("paperpresentation");
});
app.get("/workshop", function (req, res) {
  res.render("workshop");
});
app.get("/informals", function (req, res) {
  res.render("informals");
});
app.get("/accomodation", function (req, res) {
  res.render("accomodation");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/team", function (req, res) {
  res.render("team");
});

app.get("/events/smartcitydesign", function (req, res) {
  res.render("events/smartcitydesign");
});
app.get("/events/surveying", function (req, res) {
  res.render("events/surveying");
});
app.get("/events/epitome", function (req, res) {
  res.render("events/epitome");
});
app.get("/events/electrobuzz", function (req, res) {
  res.render("events/electrobuzz");
});
app.get("/events/lathewar", function (req, res) {
  res.render("events/lathewar");
});
app.get("/events/nitroracing", function (req, res) {
  res.render("events/nitroracing");
});
app.get("/events/codingkbc", function (req, res) {
  res.render("events/codingkbc");
});
app.get("/events/codedate", function (req, res) {
  res.render("events/codedate");
});
app.get("/events/virtualcampus", function (req, res) {
  res.render("events/virtualcampus");
});
app.get("/events/energycontraption", function (req, res) {
  res.render("events/energycontraption");
});
app.get("/events/pickorun", function (req, res) {
  res.render("events/pickorun");
});
app.get("/events/cadster", function (req, res) {
  res.render("events/cadster");
});
app.get("/events/webquest", function (req, res) {
  res.render("events/webquest");
});

app.get("/workshop/photoshop", function (req, res) {
  res.render("workshop/photoshop");
});
app.get("/workshop/systemadministration", function (req, res) {
  res.render("workshop/systemadministration");
});
app.get("/workshop/iot", function (req, res) {
  res.render("workshop/iot");
});
app.get("/workshop/cnc", function (req, res) {
  res.render("workshop/cnc");
});
app.get("/workshop/rcracing", function (req, res) {
  res.render("workshop/rcracing");
});

app.get("/informals/treasurehunt", function (req, res) {
  res.render("informals/treasurehunt");
});
app.get("/informals/jugaad", function (req, res) {
  res.render("informals/jugaad");
});
app.get("/informals/pubg", function (req, res) {
  res.render("informals/pubg");
});

app.listen(3000, function () {
  console.log("Website has been started");
});
