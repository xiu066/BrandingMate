$(document).ready(function() {

    //load display pages     
    $("#showAdviserHUB").html('<object id="AdviserHUB" type="text/html" data="AdviserHUB.html" width="100%" height="100%"></object>');
    $("#showInvestorHUB").html('<object id="InvestorHUB" type="text/html" data="InvestorHUB.html" width="100%" height="100%"></object>');
    $("#showLoginPage").html('<object id="LoginPage" type="text/html" data="LoginPage.html" width="100%" height="100%"></object>');
    

    //change 04 ofour color
    $("#ofourSelect").change(function(){
        var color = $("#ofourSelect").val();
        console.log(color);
        console.log($("#AdviserHUB").contents().find(".font-ofour").css( "color"));
        $("#AdviserHUB").contents().find("body").after(`<style type="text/css">.font-ofour {color: ${color}} </style>`);
        console.log($("#AdviserHUB").contents().find(".font-ofour").css( "color"));
    });


}); 

//switch between pages
function showAdviserHUB(){
    $(".show").css("display","none");
    $("#showAdviserHUB").css("display","block");
}
function showInvestorHUB(){
    $(".show").css("display","none");
    $("#showInvestorHUB").css("display","block");
}
function showLoginPage(){
    $(".show").css("display","none");
    $("#showLoginPage").css("display","block");
}

//change 04 ofour color








