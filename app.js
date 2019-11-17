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
        "https://authentic-scandinavia.com/system/images/tours/photos/130/thumbnail.jpg"
    },
    {
      name: "Earthy",
      image: ""
    },
    {
      name: "AR Camp",
      image: ""
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
