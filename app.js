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
        "https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&epi=search_campgrounds&url=https://stock.adobe.com/images/camping-green-tent-in-forest-near-lake/189909341?as_channel=affiliate&as_campaign=pexels&as_source=arvato"
    },
    {
      name: "Earthy",
      image:
        "https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&epi=search_campgrounds&url=https://stock.adobe.com/images/boy-setting-up-the-tent-at-campsite/231213779?as_channel=affiliate&as_campaign=pexels&as_source=arvato"
    },
    {
      name: "AR Camp",
      image:
        "https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&epi=search_campgrounds&url=https://stock.adobe.com/images/camping-and-tent-in-nature-park-with-sunrise/252558973?as_channel=affiliate&as_campaign=pexels&as_source=arvato"
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
