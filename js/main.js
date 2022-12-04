$(function () {
    $(".bs5").hover(function () {
        $(".bs1").show();
        $(".bs2").hide();
        $(".bs3").hide();
        $(".bs4").hide();
    });
    $(".bs6").hover(function () {
        $(".bs2").show();
        $(".bs1").hide();
        $(".bs3").hide();
        $(".bs4").hide();
    });
    $(".bs7").hover(function () {
        $(".bs3").show();
        $(".bs2").hide();
        $(".bs1").hide();
        $(".bs4").hide();

    });
    $(".bs8").hover(function () {
        $(".bs4").show();
        $(".bs2").hide();
        $(".bs3").hide();
        $(".bs1").hide();
    });


});




 