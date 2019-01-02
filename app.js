var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("landing");
});
app.get("/events",function(req,res){
    
    res.render("events");
});
app.get("/hackathon",function(req,res){
    res.render("hackathon");
});
app.get("/makeathon",function(req,res){
    res.render("makeathon");
});app.get("/paperpresentation",function(req,res){
    res.render("paperpresentation");
});
app.get("/workshop",function(req,res){
    res.render("workshop");
});

app.listen(process.env.PORT, process.env.IP, function(){
// app.listen(3000, function(){
    console.log("The Wings' Website has been started");
});