const express = require("express");
const bodyParser = require("body-parser");
//initializing express app
const app = express();
const PORT = 8080;

//needed for body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//sets up the templates in views
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Earthy",
    image:
      "https://www.photosforclass.com/download/pixabay-1846142?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c722b7bd6944cc258_960.jpg&user=Pexels"
  },
  {
    name: "Warrirors Way",
    image:
      "https://www.photosforclass.com/download/pixabay-4522970?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c722b7bd6944cc258_960.jpg&user=Ben_Frieden"
  },
  {
    name: "AR Camp",
    image:
      "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c722b7bd6944cc258_960.jpg&user=Free-Photos"
  }
];

//landing page
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  //campgrounds is the data we're passing in and the data we want to call it
  // we can call it whatever we want
  //common to see them named the same thing
  res.render("campgrounds", { campgrounds: campgrounds });
});

//shows the form that will send data to post route
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.listen(PORT, function() {
  console.log("Yelp Camp is listening on PORT " + PORT);
});
