var express = require("express");
var app = express();

app.get("/:test", function(req, res){
    var test = req.params.test;
    res.render("test.ejs", {myVar: test});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!");
});