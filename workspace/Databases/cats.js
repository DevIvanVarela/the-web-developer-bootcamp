var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cap_app");

//Definição do Schema.
var catSchema = mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


// Primeiro modo de insert no mongoose.
//var george = new Cat({
//    name: "Mrs. Norris",
//    age: 7,
//    temperament: "Evil"
//});

//george.save(function(err, cat){
//   if(err) {
//      console.log("Something went wrong:");
//       console.log(err);
//   } else {
//       console.log("We just saved a cat to the database:");
//       console.log(cat);
//   }
//});

// Segundo modo de insert no mongoose
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err) {
        console.log("Something went wrong:");
        console.log(err);
    } else {
        console.log("We just saved a cat to the database:");
        console.log(cat);
    }
});

// Select all no mongoose
Cat.find({}, function(err, cats){
    if(err) {
        console.log("Oh no error!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});