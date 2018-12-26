var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));



app.get("/",function(req,res){
    res.render("landing");
});
app.get("/events",function(req,res){
    var events = [
        {name:"SMART CITY DESIGN", img:"", FP:"5000", SP:"3000", TP:"2000"},
        {name:"SURVEYING", img:"", FP:"", SP:"", TP:""},
        {name:"EPITOME", img:"", FP:"5000", SP:"3000", TP:"2000"},
        {name:"ELECTROBUZZ", img:"", FP:"3000", SP:"2000", TP:"1000"},
        {name:"LATHE WAR", img:"", FP:"", SP:"", TP:""},
        {name:"NITRORACING", img:"", FP:"", SP:"", TP:""},
        {name:"CODING KBC", img:"", FP:"", SP:"", TP:""},
        {name:"CODE DATE", img:"", FP:"", SP:"", TP:""},
        {name:"VIRTUAL CAMPUS", img:"", FP:"", SP:"", TP:""},
        {name:"ENERGY CONTRAPTION", img:"", FP:"", SP:"", TP:""},
        {name:"PICK O’ RUN", img:"", FP:"", SP:"", TP:""},
        {name:"CADSTER", img:"", FP:"", SP:"", TP:""},
        {name:"WEB QUEST", img:"", FP:"", SP:"", TP:""},
        
    ]
    res.render("events",{events:events});
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

app.listen(3000,function(){
    console.log("The Wings' Website has been started");
});