$(function () {
    $(".subms1").click(function () {
        $(".subm1").show();
        $(".subm2").hide();
        $(".subm3").hide();
        $(".subm4").hide();
        $(".subm5").hide();
    });

    $(".subms2").click(function () {
        $(".subm2").show();
        $(".subm1").show();
        $(".subm3").hide();
        $(".subm4").hide();
        $(".subm5").hide();
    });

    $(".subms3").click(function () {
        $(".subm3").show();
        $(".subm1").hide();
        $(".subm2").hide();
        $(".subm4").hide();
        $(".subm5").hide();
    });


    $(".subms4").click(function () {
        $(".subm4").show();
        $(".subm3").hide();
        $(".subm1").hide();
        $(".subm2").hide();
        $(".subm5").hide();
    });


    $(".subms5").click(function () {
        $(".subm5").show();
        $(".subm3").hide();
        $(".subm1").hide();
        $(".subm2").hide();
        $(".subm4").hide();
    });

});
