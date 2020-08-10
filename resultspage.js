var beachResults = JSON.parse(localStorage.getItem("ichoose"));

var beachName = document.getElementById("beach-name");
var weather = document.getElementById("weather");
var amenities = $("#amenities");
var conditions = document.getElementById("conditions");

var beachNameLoc = beachResults.NameMobileWeb;
var amenParking = "Parking: " + beachResults.PARKING;
var amenRestrooms = "Restroom: " + beachResults.RESTROOMS;
var amenVisitor = "Visitor Center: " + beachResults.VISTOR_CTR;
var amenCampgrounds = "Campgrounds: " + beachResults.CAMPGROUND;
var amenFishing = "Fishing: " + beachResults.FISHING;
var amenBoating = "Boating: " + beachResults.BOATING;
var linebreak = document.createElement("br");
var beachPic1 = beachResults.Photo_1;

console.log(beachResults);
console.log(beachResults.Photo_1);
console.log(beachPic1);
beachName.textContent = beachNameLoc;
// amenities.textContent =
//   "Amenities" +
//   linebreak +
//   amenParking +
//   amenRestrooms +
//   amenVisitor +
//   amenCampgrounds +
//   amenFishing +
//   amenBoating;

// $("#picture").attr(
//   '<img class="backgroundPicture" id="beachpic" style=" ' + beachPic1 + ' "/> '
// );

if (beachPic1 !== "") {
  $("#picture").attr("style", "background-image: url('" + beachPic1 + "')");
}

// $("#picture").attr("style", "background-image: url('" + beachPic1 + "')");

// $("#pic1").attr("src", beachPic1);

amenities.append(
  "<br><br>" +
    amenParking +
    "<br><br>" +
    amenRestrooms +
    "<br><br>" +
    amenVisitor +
    "<br><br>" +
    amenCampgrounds +
    "<br><br>" +
    amenFishing +
    "<br><br>" +
    amenBoating +
    "<br><br>"
);

console.log(amenParking);
console.log(beachResults.PARKING);
