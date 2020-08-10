$(document.body).ready(function () {

    // Pull the results from local storage
    var beaches = JSON.parse(localStorage.getItem("results"));
    var coastalinfo = [];
    if (beaches != null) {

        // Pull the the coastal commisions API
        $.ajax({
            url: "https://api.coastal.ca.gov/access/v1/locations",
            method: "GET"
        }).then(function (response) {

            // Match the results.name from local storage to the coastal commisions API.name, then push into coastalinfo array
            beaches.forEach(function (item) {
                var beachname = item.name;
                for (var i = 0; i < response.length; i++) {
                    var coastalname = response[i].NameMobileWeb;
                    if (beachname == coastalname) {
                        coastalinfo.push(response[i]);
                    }
                }
            })

            if (coastalinfo.length == 0) {
                // Alert user if no searches match the coastal commisions API, send them back to home page
                alert("Please try a closer location!")
                window.location.href = "index.html";
            } else {
                // Create div elements for the search results then append it, apply a stock photo if database doesn't have one, create a data-index for later reference
                coastalinfo.forEach(function (item, index) {
                    console.log(item);
                    if (item.Photo_1 == "") {
                        var element = $('<div class="row result" id="odd-row" data-index="' + index + '"><div class="col-md-6"><div class="info-div"><p>' + item.NameMobileWeb + '</p><p>' + item.COUNTY + ' County, California</p></div></div><div class="col-md-6"><div class="pic-div"><img src="images/beach-sand.jpg" alt="..." class="img-thumbnail"></div></div></div><br>');
                        $(".searches").append(element);
                    } else {
                        var element = $('<div class="row result" id="odd-row" data-index="' + index + '"><div class="col-md-6"><div class="info-div"><p>' + item.NameMobileWeb + '</p><p>' + item.COUNTY + ' County, California</p></div></div><div class="col-md-6"><div class="pic-div"><img src="' + item.Photo_1 + '" alt="..." class="img-thumbnail"></div></div></div><br>');
                        $(".searches").append(element);
                    }
                })
            }



            // When user clicks on the div row, use the data-index to reference which of the results in the coastalinfo array is being referred to
            $(document).on("click", ".result", function () {
                var dataindex = $(this).attr("data-index");
                console.log(coastalinfo[dataindex]);

                // Then store that into local storage before sending the user to  the results-page.html
                localStorage.setItem("ichoose", JSON.stringify(coastalinfo[dataindex]));
                window.location.href = "results-page.html";
            })
        })
    }
})
