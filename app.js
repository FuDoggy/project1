var map;
var mapsearch;
var geocoder;
var service;
var beaches = [];

function initialize() {

    document.getElementById("searchbutton").addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Good button!")

        // Enter the address
        var address = document.getElementById("searchbar").value;
        console.log(address)

        // Geocode the address into the map object
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: address
        }, function(results, status) {
            if (status === "OK") {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                console.log(results[0].address_components);
                
                // Create a map object for the Places API to read
                map = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(lat, lng),
                    zoom: 8
                })
                console.log(map.center.lat() + " " + map.center.lng());

                // Call the Places library and run the function nearbySearch (has two parameters: request and function)
                service = new google.maps.places.PlacesService(map);
                service.nearbySearch({
                    location: new google.maps.LatLng(lat,lng),
                    radius: "50000",
                    keyword: ["beach"]
                }, function(results, status) {
                    if (status == "OK") {
                        for (var i = 0; i < results.length; i++) {
                            beaches.push(results[i].name);
                        }
                        
                        console.log(beaches)
                        localStorage.setItem("results", JSON.stringify(beaches));
                        window.location.href = "search.html"
                    } else {
                        alert("Nearby Search is not working: " + status)
                    }
                })
            } else {
                alert("Geocode is not working: " + status)
            }
        })
    })
}

console.log("hello");