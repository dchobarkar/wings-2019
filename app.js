var express = require("express");
var app = express();

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("landing");
});
app.get("/events",function(req,res){
    res.render("events");
});
app.get("/hackathon",function(req,res){
    res.render("hackathon");
});


app.listen(3000,function(){
    console.log("The Wings' Website has been started");
});