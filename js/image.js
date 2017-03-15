var getImage = function(searchParam, imgDisplay) {

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + searchParam + "&mkt=en-us&size=Large",
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","multipart/form-data");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","b01dc1c28c0c47059e379f6995be6f63");
        },
        type: "POST",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        imgDisplay(data.value[0].contentUrl);
    })
    .fail(function() {
        alert("error");
    });
};

exports.imageModule = getImage;
