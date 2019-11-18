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
      "https://st4.depositphotos.com/thumbs/2922775/image/22763/227633784/api_thumb_450.jpg"
  },
  {
    name: "Warrirors Way",
    image:
      "https://st2.depositphotos.com/thumbs/3806485/image/6262/62628733/api_thumb_450.jpg"
  },
  {
    name: "AR Camp",
    image:
      "https://st.depositphotos.com/thumbs/1217458/image/1404/14040685/api_thumb_450.jpg"
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
