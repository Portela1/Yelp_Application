var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

var campgrounds =[
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"},
    {name:"Hell", image: "https://www.evangelistjoshua.com/wp-content/uploads/2018/10/Hell-678x381.jpg"},
    {name:"Heaven", image: "https://i.pinimg.com/originals/6d/e6/99/6de69929f42d617fc979d8bc38eb437d.jpg"},
    {name:"Pulgatory", image: "https://churchpop.com/wp-content/uploads/2020/03/purgatory-1280x720.jpg"}
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

