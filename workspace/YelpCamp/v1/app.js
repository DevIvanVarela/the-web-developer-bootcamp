var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

var campgrounds = [
    { name: "Salmon Creek", image: "https://photosforclass.com/download/flickr-16263386718" },
    { name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f1c07ea3ebb5bf_960.jpg&user=Pexels" },
    { name: "Montain Goat's Rest", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f1c07ea3ebb5bf_960.jpg&user=Free-Photos" }
];

app.get("/campgrounds", function(req, res){
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    
    campgrounds.push({name: name, image: image});
    
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
    
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The YelpCamp Server has started.");
});