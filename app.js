const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  PORT = 8080;

//create yelpcamp db inside mongdb
mongoose.connect("mongodb://localhost/yelpcamp", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

//needed for body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//sets up the templates in views
app.set("view engine", "ejs");

const Campground = mongoose.model(
  "Campground",
  { name: String },
  {
    image: String
  }
);

// const camp = new Campground({ name: "Fire" });
// camp.save().then(() => console.log("wild"));

//SCHEME SETUP
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

//compile into model
// const Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
    name: "Earthy",
    image:
      "https://st4.depositphotos.com/thumbs/2922775/image/22763/227633784/api_thumb_450.jpg"
  },
  function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      console.log("NEWLY CREATE CAMPGROUND");
      console.log(campground);
    }
  }
);

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
