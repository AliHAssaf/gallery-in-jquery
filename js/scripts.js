$(document).ready(function(){
    $(".buttons").click(function (e) { 
        $(this).addClass("active").siblings().removeClass("active");
        var filter = $(this).attr("data-filter");
        if(filter == "all"){
            $(".image").show(400);
        }
        else{
            $(".image").not("."+filter).hide(200);
            $(".image").filter("."+filter).show(400);
        }
    });

    $gallery = $('.gallery').lbtLightBox({
        pagination_width:"100px",
        pagination_height:"100px",
        qtd_pagination: 6,
        // db:true,
    });
    $gallery.update();
    $gallery.preload();
    // $("").text("Ali Assaf");
})
// document.getElementById("lbt-name_lightbox").innerHTML = "Ali Assaf";