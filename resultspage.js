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

$(document.body).ready(function() {
  
  if (beachResults != null) {
      var day = new Date();
      var hour = day.getHours();
      console.log(hour)
      var lat = beachResults.LATITUDE
      var lng = beachResults.LONGITUDE
      var params = "airTemperature,precipitation,humidity,gust,waveDirection,waveHeight,wavePeriod"
      fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
          "Authorization": "3ac08b94-db36-11ea-bdeb-0242ac130002-3ac08c5c-db36-11ea-bdeb-0242ac130002"
      }
      }).then((response) => response.json()).then((data) => {
          var airTemperature;
          var gust;
          var humidity;
          var precipitation;
          var waveDirection;
          var waveHeight;
          var wavePeriod;
          if (hour >= 0 && hour < 4) {
              airTemperature = data.hours[2].airTemperature.noaa;
              gust = data.hours[2].gust.noaa;
              humidity = data.hours[2].humidity.noaa;
              precipitation = data.hours[2].precipitation.noaa;
              waveDirection = data.hours[2].waveDirection.noaa;
              waveHeight = data.hours[2].waveHeight.noaa;
              wavePeriod = data.hours[2].wavePeriod.noaa;
          }
          else if (hour >= 4 && hour < 8) {
              airTemperature = data.hours[6].airTemperature.noaa;
              gust = data.hours[6].gust.noaa;
              humidity = data.hours[6].humidity.noaa;
              precipitation = data.hours[6].precipitation.noaa;
              waveDirection = data.hours[6].waveDirection.noaa;
              waveHeight = data.hours[6].waveHeight.noaa;
              wavePeriod = data.hours[6].wavePeriod.noaa;
          } else if (hour >= 8 && hour < 12) {
              airTemperature = data.hours[10].airTemperature.noaa;
              gust = data.hours[10].gust.noaa;
              humidity = data.hours[10].humidity.noaa;
              precipitation = data.hours[10].precipitation.noaa;
              waveDirection = data.hours[10].waveDirection.noaa;
              waveHeight = data.hours[10].waveHeight.noaa;
              wavePeriod = data.hours[10].wavePeriod.noaa;
          } else if (hour >= 12 && hour < 16) {
              airTemperature = data.hours[14].airTemperature.noaa;
              gust = data.hours[14].gust.noaa;
              humidity = data.hours[14].humidity.noaa;
              precipitation = data.hours[14].precipitation.noaa;
              waveDirection = data.hours[14].waveDirection.noaa;
              waveHeight = data.hours[14].waveHeight.noaa;
              wavePeriod = data.hours[14].wavePeriod.noaa;
          } else if (hour >= 16 && hour <= 20) {
              airTemperature = data.hours[18].airTemperature.noaa;
              gust = data.hours[18].gust.noaa;
              humidity = data.hours[18].humidity.noaa;
              precipitation = data.hours[18].precipitation.noaa;
              waveDirection = data.hours[18].waveDirection.noaa;
              waveHeight = data.hours[18].waveHeight.noaa;
              wavePeriod = data.hours[18].wavePeriod.noaa;
          } else if (hour >= 20 && hour <= 23) {
              airTemperature = data.hours[22].airTemperature.noaa;
              gust = data.hours[22].gust.noaa;
              humidity = data.hours[22].humidity.noaa;
              precipitation = data.hours[22].precipitation.noaa;
              waveDirection = data.hours[22].waveDirection.noaa;
              waveHeight = data.hours[22].waveHeight.noaa;
              wavePeriod = data.hours[22].wavePeriod.noaa;
          } 
          airTemperature = (airTemperature * (9/5)) + 32;
          console.log(airTemperature + " " + gust + " " + humidity + " " + precipitation);
          var theair = $("<p>Air Temperature: " + airTemperature + " F</p>");
          var thegust = $("<p>Wind: " + gust + " m/s</p>");
          var thehumidity = $("<p>Humidity: " + humidity + " %</p>");
          var theprecipitation = $("<p>Precipitation: " + precipitation + " mm</p>")
          $("#weather").append(theair, thegust, thehumidity, theprecipitation);
          var thewaveDirection = $("<p>Wave Direction: " + waveDirection + " degrees from N</p>");
          var thewaveHeight = $("<p>Wave Height: " + waveHeight + " meters</p>");
          var thewavePeriod = $("<p>Wave Period: " + wavePeriod + " seconds</p>");
          $("#surf").append(thewaveDirection, thewaveHeight, thewavePeriod);
      });
  }
})