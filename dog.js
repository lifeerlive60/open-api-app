$(document).ready(function () {
     $.ajax({
            url: "https://dog.ceo/api/breeds/list/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data.message, function (key, value) {
                    $("#dogbreedskeys").append('<option>' + key + '</option>');
                });

            },
            error: function (XHR) {
                console.log(XHR);
            }
        })
   

    $("#dogbreedskeys").on("click", function () {
        var breed = $("#dogbreedskeys").val();
        var image_url_subbreed = "https://dog.ceo/api/breed/" + breed + "/list";
        $.ajax({
            url: image_url_subbreed,
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (data.message.length !== 0) {
                    $("#dogsubbreedskeys").empty();
                    $.each(data.message, function (key, value) {
                        $("#dogsubbreedskeys").append('<option>' + value + '</option>');
                    })

                } else {
                    $("#dogsubbreedskeys").empty();
                    $("#dogsubbreedskeys").append('<option> none </option>');
                }
            },
            error: function (XHR) {
                console.log(XHR);
            }
        })
    })

    // https://dog.ceo/api/breeds/image/random
    // https://dog.ceo/api/breeds/image/random/3
    // https://dog.ceo/api/breed/hound/images      
    // https://dog.ceo/api/breed/hound/list

    // https: //dog.ceo/api/breed/hound/afghan/images


    $("#press").click(function () {
        var breed = $("#dogbreedskeys").val();
        var subbreed = $("#dogsubbreedskeys").val();
        var breed_image_url = "https://dog.ceo/api/breed/" + breed + "/images";
        var subbreed_image_url = "https://dog.ceo/api/breed/" + breed + "/" + subbreed + "/images";

        if (subbreed == "none") {
            $.ajax({
                url: breed_image_url,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    var random = (Math.floor(Math.random() * 10));
                    var image = data.message[random];
                    // console.log(`"${image}"`);               
                    $("#pic_show").html(`<img class="img-fluid" style="height:500px!important;width:500px!important;" src = '${image}'></image>`);


                },
                error: function (XHR) {
                    console.log(XHR);
                }
            })
        }else{
            $.ajax({
                url: subbreed_image_url,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    var random = (Math.floor(Math.random() * 10));
                    var image = data.message[random];
                    // console.log(`"${image}"`);               
                    $("#pic_show").html(`<img src = '${image}'></image>`);


                },
                error: function (XHR) {
                    console.log(XHR);
                }
            })
        }


    })




})