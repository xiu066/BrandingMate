
$(document).ready(function(){
//switch between display pages
function showAdviserHUB(){
    $(".show").hide();
    $("#showAdviserHUB").show();
}

function showInvestorHUB(){
    $(".show").hide();
    $("#showInvestorHUB").show();
}

function showLoginPage(){
    $(".show").hide();
    $("#showLoginPage").show();
}
//change 04 ofour color




$("#ofourSelect").change(
    function () {
        var color = $("#ofourSelect").val();
        console.log(color);
        $("#showAdviserHUB").contents().find(".font-ofour").css("color",color); 
});


// function ofourSelect() {
//     // var color = $("#ofourSelect").val();
//     // 
// 	var iFrameDOM = $("iframe#showAdviserHUB").contents();

// 	iFrameDOM.find("div").css("background-color", "#fff")
//     //document.getElementById("demo").innerHTML = "You selected: " + x;
//   }


//turn on/off extra configurations for White Label
// function checkWhiteLabel(checkbox){
//     if(checkbox.checked==true) {
//         $("#whiteLabelSettings").show();
//     } else {
//         $("#whiteLabelSettings").hide();
//     }
// }

});
