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
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94tNv_t--SLknpQC8rHa5QTLxXkc9RRUA884K4vXDu-7ZYrWb",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }
// );

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err)
        } else {
            res.render("index", {campgrounds: campgrounds});
        }
    })
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    
    Campground.create({name: name, image: image, description: description}, function(err, newlyCreated){
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

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render("show.ejs", {campground: foundCampground});        
        }
    })
    
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The YelpCamp Server has started.");
});