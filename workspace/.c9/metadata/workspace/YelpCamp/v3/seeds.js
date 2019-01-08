{"filter":false,"title":"seeds.js","tooltip":"/YelpCamp/v3/seeds.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":14},"end":{"row":35,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"4e3ef6d1e9aa4fa2780c86851e5f649d6c1e668e","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":63,"column":24},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");"," ","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]"," ","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","        Comment.remove({}, function(err) {","            if(err){","                console.log(err);","            }","            console.log(\"removed comments!\");","             //add a few campgrounds","            data.forEach(function(seed){","                Campground.create(seed, function(err, campground){","                    if(err){","                        console.log(err)","                    } else {","                        console.log(\"added a campground\");","                        //create a comment","                        Comment.create(","                            {","                                text: \"This place is great, but I wish there was internet\",","                                author: \"Homer\"","                            }, function(err, comment){","                                if(err){","                                    console.log(err);","                                } else {","                                    campground.comments.push(comment);","                                    campground.save();","                                    console.log(\"Created new comment\");","                                }","                            });","                    }","                });","            });","        });","    }); ","    //add a few comments","}"," ","module.exports = seedDB;"],"id":1}]]},"timestamp":1546191103568}