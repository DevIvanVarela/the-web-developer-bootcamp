var express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));


var blogSchema = new mongoose.Schema({
   title: String,
   image: String,
   body: String,
   create: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("index", { blogs: blogs });      
        }
    });
});

app.get("/blogs/new", function(req, res) {
    res.render("new");
});

app.post("/blogs", function(req, res) {
    req.body.blog.body = this.sanitizer(req, req.body.blog.body);
    
    Blog.create(req.body.blog, function(err, newBlog){
        if(err) {
            res.render("new");
        } else {
           res.redirect("/blogs");
        }
    });
});

app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if(err){
            res.redirect("/blogs");
            console.log(err);
        } else {
            res.render("show", {blog: blog});
        }
    });
});

app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: blog});      
        }
    })
   
});

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = this.sanitizer(req, req.body.blog.body);
    
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
       if(err) {
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
    });
});

app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
       if(err) {
           console.log(err);
       } 
       
       res.redirect("/blogs");
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The RESTfulBlogApp is running.");
});

function sanitizer(req, text) { 
    return req.sanitize(text);
}