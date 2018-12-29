var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    
    res.send("The " + animal +  " goes '" + getAnimalSound(animal) +"'");
});

app.get("/repeat/:what/:times", function(req, res){
    var what = req.params.what;
    var times = parseInt(req.params.times);
    var answer = "";
    for (var i = 0; i < times; i++) {
        answer += what;
        if(i != times - 1) {
            answer +=", "
        }
    }
    
    res.send(answer);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

function getAnimalSound(animal) {
    animal = animal.toLowerCase();
    var sounds = {
        cow: "Moo",
        pig: "Oink",
        dog: "Woof woof",
        cat: "I hate you, human",
        goldfish: "..."
    }
    
    return sounds[animal];
    //if(animal == "COW") {
    //    return "Moo!";
    //} else if (animal == "PIG") {
    //    return "Oink";
    //} else if (animal == "DOG") {
    //    return "Woof woof!"
    //} else {
    //    return "crazy!";
    //}
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});