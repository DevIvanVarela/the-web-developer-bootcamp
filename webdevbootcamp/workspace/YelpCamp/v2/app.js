var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

//Schema Setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err)
        } else {
            res.render("campgrounds", {campgrounds: campgrounds});
        }
    })
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    
    Campground.create({name: name, image: image}, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");     
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
    
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The YelpCamp Server has started.");
});