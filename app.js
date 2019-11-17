const express = require("express");
//initializing express app
const app = express();
const PORT = 8080;

//sets up the templates in views
app.set("view engine", "ejs");

//landing page
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  const campgrounds = [
    {
      name: "Warriors Way",
      image:
        "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c722c72d7954ac759_340.jpg"
    },
    {
      name: "Earthy",
      image:
        "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c722c72d7954ac759_340.jpg"
    },
    {
      name: "AR Camp",
      image:
        "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c722c72d7954ac759_340.jpg"
    }
  ];
  //campgrounds is the data we're passing in and the data we want to call it
  // we can call it whatever we want
  //common to see them named the same thing
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(PORT, function() {
  console.log("Yelp Camp is listening on PORT " + PORT);
});
