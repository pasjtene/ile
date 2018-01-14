/*
synthesis.documentReady(function(){

    synthesis.showOrHide('sous-titre-lef-nav', 'sous-titre-anglais');


});
*/
$(document).ready(function(){
   console.log("jquery is running");


    $("#sous-titre-anglais").slideDown();
    $("#left-nav-al-cont").slideDown();
    $("#sous-titre-lef-nav-an").click(function(e){
        if($("#sous-titre-anglais").is(":visible")){
            $("#sous-titre-anglais").slideUp();
        }else {
            $("#sous-titre-anglais").slideDown();
        }

    });

    $("#sous-titre-lef-nav-al").click(function(e){
        if($("#left-nav-al-cont").is(":visible")){
            $("#left-nav-al-cont").slideUp();
        }else {
            $("#left-nav-al-cont").slideDown();
        }
    });

    $("#sous-titre-lef-nav-it").click(function(e){
        $("#sous-titre-lef-nav-it").addClass("darkblue-border");
        if($("#left-nav-it-cont").is(":visible")){
            $("#left-nav-it-cont").slideUp();
        }else {
            $("#left-nav-it-cont").slideDown();
        }
    });

    $("#sous-titre-lef-nav-es").click(function(e){
        if($("#left-nav-es-cont").is(":visible")){
            $("#left-nav-es-cont").slideUp();
        }else {
            $("#left-nav-es-cont").slideDown();
        }
    });

    $("#sous-titre-lef-nav-fr").click(function(e){
        if($("#left-nav-fr-cont").is(":visible")){
            $("#left-nav-fr-cont").slideUp();
        }else {
            $("#left-nav-fr-cont").slideDown();
        }
    });


    // for mobile

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log("The wi is: "+width);

    if(detectmob()) {
        console.log("This is a mobile phone:++ 2");
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
        console.log("This is a mobile phone:++ 1");
    }

    var isMobile = window.matchMedia("and (max-device-width : 667px");

    if (isMobile.matches) {
        //Conditional script here
        console.log("This is a mobile phone:++ ");
    }

    /*
    $(window).on("resize", function (e) {
        checkScreenSize();
    });
*/
    //checkScreenSize();

    $(".ftitle1").click(function(){
        $(".fcontent").slideToggle();
    });

    function checkScreenSize(){
        var newWindowWidth = $(document).width();
        if (newWindowWidth < 481) {
            console.log("This is a mobile phone: "+newWindowWidth);
            alert("This is a mobile phone");
            $(".fcontent").hide();
        }
        else
        {
            $(".fcontent").show();
            console.log("This is NOT a mobile phone: "+newWindowWidth);
        }
    }


});

function detectmob() {
    if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
}
