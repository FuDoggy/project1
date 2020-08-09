$(document.body).ready(function () {

    // Pull the results from local storage
    var beaches = JSON.parse(localStorage.getItem("results"));
    var coastalinfo = [];
    if (beaches != null) {

        // Pull the the coastal commisions API
        $.ajax({
            url: "https://api.coastal.ca.gov/access/v1/locations",
            method: "GET"
        }).then(function(response) {

            // Match the results.name from local storage to the coastal commisions API.name, then push into coastalinfo array
            beaches.forEach(function(item) {
                var beachname = item.name;
                for (var i = 0; i < response.length; i++) {
                    var coastalname = response[i].NameMobileWeb;
                    if (beachname == coastalname) {
                        coastalinfo.push(response[i]);
                    }
                }
            })



            // Create div elements for the search results then append it
            coastalinfo.forEach(function(item,index) {
                if (item.Photo_1 == "") {
                    var element = $('<div class="row result" id="odd-row" data-index="' + index + '"><div class="col-md-6"><div class="info-div">' + item.NameMobileWeb + '</div></div><div class="col-md-6"><div class="pic-div"><img src="images/beach-sand.jpg" alt="..." class="img-thumbnail"></div></div></div><br>');
                    $(".searches").append(element);
                } else {
                    var element = $('<div class="row result" id="odd-row" data-index="' + index + '"><div class="col-md-6"><div class="info-div">' + item.NameMobileWeb + '</div></div><div class="col-md-6"><div class="pic-div"><img src="' + item.Photo_1 + '" alt="..." class="img-thumbnail"></div></div></div><br>');
                    $(".searches").append(element);
                }
            })

            $(document).on("click", ".result", function() {
                var dataindex = $(this).attr("data-index");
                console.log(coastalinfo[dataindex]);
            })
            

        })


















        // // Sort through the results then push the name into coastal commisions api name search
        // for (var i = 0; i < beaches.length; i++) {
        //     var beachname = beaches[i].name;
        //     var queryURL = "https://api.coastal.ca.gov/access/v1/locations/name/" + beachname;
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {

        //         // Only grab those that match with the coastal api
        //         if (response.length == 1) {

        //             // Push into the matches array and store to local storage, will use for results-page.html
        //             matches.push(response);
        //             console.log(matches);
        //             localStorage.setItem("matches", JSON.stringify(matches));

        //             // Append the all the div elements with all its classes. If result doesn't have photo display, substitute a stock photo
        //             if (response[0].Photo_1 == "") {
        //                 var element = $('<div class="row" id="odd-row"><div class="col-md-6"><div id="name1" class="info-div">' + response[0].NameMobileWeb + '</div></div><div class="col-md-6"><div class="pic-div"><img src="images/beach-sand.jpg" alt="..." class="img-thumbnail"></div></div></div>');
        //                 $(".searches").append(element);
        //             } else {
        //                 var element = $('<div class="row" id="odd-row"><div class="col-md-6"><div id="name1" class="info-div">' + response[0].NameMobileWeb + '</div></div><div class="col-md-6"><div class="pic-div"><img src="' + response[0].Photo_1 + '" alt="..." class="img-thumbnail"></div></div></div>');
        //                 $(".searches").append(element);
        //             }
        //         }
        //     })
        // }






    }
})
