var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends =["Ross", "Chandler", "Monica", "Phoebe", "Rachel"];

app.get("/", function(req, res){
   res.render("home") ;
});

app.get("/friends", function(req, res){
   res.render("friends", {friends: friends}) ;
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});