// 상품미리보기탭

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


// 제품고르기탭


$(function(){

    $(".wh").click(function(){
        $("#kind").css("display","flex");
        $("#kind2").hide();
        $("#kind3").hide(); 
        $("#kind4").hide();
    });


    $(".mgr").click(function(){
        $("#kind2").css("display","flex");
        $("#kind").hide();
        $("#kind3").hide(); 
        $("#kind4").hide();
    });
    
    $(".sgr").click(function(){
        $("#kind3").css("display","flex");
        $("#kind2").hide();
        $("#kind1").hide(); 
        $("#kind4").hide();
    });
    
    $(".cm").click(function(){
        $("#kind4").css("display","flex");
        $("#kind2").hide();
        $("#kind3").hide(); 
        $("#kind1").hide();
    });        });