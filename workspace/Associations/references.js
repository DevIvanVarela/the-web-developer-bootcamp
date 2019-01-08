var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var Post = require("./models/post");
var User = require("./models/user");

