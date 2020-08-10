$(document.body).ready(function() {
    $("#feature1").on("click", function() {
        $.ajax({
            url: "https://api.coastal.ca.gov/access/v1/locations/name/mission%20beach",
            method: "GET"
        }).then(function(response) {
            localStorage.setItem("ichoose", JSON.stringify(response[0]));
            window.location.href = "results-page.html";
        })
    })

    $("#feature2").on("click", function() {
        $.ajax({
            url: "https://api.coastal.ca.gov/access/v1/locations/id/1301",
            method: "GET"
        }).then(function(response) {
            localStorage.setItem("ichoose", JSON.stringify(response[0]));
            window.location.href = "results-page.html";
        })
    })

    $("#feature3").on("click", function() {
        $.ajax({
            url: "https://api.coastal.ca.gov/access/v1/locations/id/1069",
            method: "GET"
        }).then(function(response) {
            localStorage.setItem("ichoose", JSON.stringify(response[0]));
            window.location.href = "results-page.html";
        })
    })
})