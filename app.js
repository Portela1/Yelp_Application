var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

var campgrounds =[
    {name:"Hell", image: "https://i.pinimg.com/564x/12/c8/3e/12c83efa4d0baf8aa39a48a40a173da8.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/236x/32/4b/20/324b204d391ae6a08993e6d3b25c2e42.jpg"},
    {name:"Pulgatory", image: "https://thumbs.dreamstime.com/b/earth-sinking-pollution-8147924.jpg"}
]

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing")
});

app.get("/campgrounds",function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds})
});

app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name:name,image:image}
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res){
    res.render("new")
})



app.listen(port, () => console.log(`http://localhost:3000`));

