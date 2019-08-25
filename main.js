$(document).ready(function() {

    //load display pages     
    $("#showAdviserHUB").html(`<object id="AdviserHUB" type="text/html" data="AdviserHUB_NewMethod.html" width="130%" height="100%"></object>`);
    $("#showInvestorHUB").html('<object id="InvestorHUB" type="text/html" data="InvestorHUB.html" width="100%" height="100%"></object>');
    $("#showLoginPage").html('<object id="LoginPage" type="text/html" data="LoginPage.html" width="100%" height="100%"></object>');
    
    //change 00 
    function readURL(input) {
        if(!/.(PNG|PNg|Png|PnG|pNG|pNg|pnG|png)$/.test(input.value)){
            alert("Must be a background-removed .png image!");
            return false;
          }
        else if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var data = e.target.result
                var image = new Image(); 
                image.onload = function(){
                    var w = image.width;
                    var h = image.height;
                    var hw = h/w;
                    var wh = w/h;
                    $("#AdviserHUB").contents().find("#logo").attr("src", data);
                    if (wh >= (208/58)){
                        $("#AdviserHUB").contents().find("html").append(`<style>#logo {width : 208px!important; height : ${208*hw}px!important} </style>`);
                    } else {
                        $("#AdviserHUB").contents().find("html").append(`<style>#logo {width : ${58*(w/h)}px!important; height : 58px!important} </style>`);
                    }
                }
                image.src = data;
                
             }      
            reader.readAsDataURL(input.files[0]);
        }
      }
      
      $("#brandLogo").change(function() {
        readURL(this);
      });
    //change 01
    //change 02
    var otwo = "blue-madison"
    $("#otwoSelect").change(function(){
        var color = $("#otwoSelect").val()

        $("#AdviserHUB").contents().find("#otwo-a-1").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-2").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-3").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-4").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-5").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-6").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-7").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-8").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-9").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-10").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-11").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-12").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-a-13").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-div-1").removeClass(otwo).addClass(color);
        $("#AdviserHUB").contents().find("#otwo-div-2").removeClass(otwo).addClass(color);

        otwo = color;
    });
    //change 03
    var othree = "grey-cascade"
    $("#othreeSelect").change(function(){
        var color = $("#othreeSelect").val()

        $("#AdviserHUB").contents().find("#othree-a-1").removeClass(othree).addClass(color);

        othree = color;
    });
    //change 04 ofour color
    var ofour = "blue-madison"
    $("#ofourSelect").change(function(){
        var color = $("#ofourSelect").val()

        $("#AdviserHUB").contents().find("#unreadCountSpan").removeClass("bg-"+ofour).addClass("bg-"+color);
        $("#AdviserHUB").contents().find("h1").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-div-1").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-div-2").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-1").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#TotalAmountFUM").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_FUMChartPortlet_ctl01_totalAccountsThisMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_FUMChartPortlet_ctl01_totalAccountsLastMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_FUMChartPortlet_ctl01_averageAccountThisMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_FUMChartPortlet_ctl01_averageAccountLastMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-2").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_inflowsThisMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_inflowsLastMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_outflowsThisMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_outflowsLastMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_newAccountsThisMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ctl00_ctl00_MainContentPlaceHolder_MainContentPlaceHolder_InflowChartPortlet_ctl02_newAccountsLastMonth").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-3").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#feeAmount").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#contributionFees").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#brokerage").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#feesAccrued").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-4").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-5").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-6").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-7").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-8").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-span-9").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-td-1").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-td-2").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-td-3").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-td-4").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-td-5").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-h2-1").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-h2-2").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-h2-3").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-h2-4").removeClass("font-"+ofour).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofour-button-1").removeClass(ofour).addClass(color);
        $("#AdviserHUB").contents().find("#ofour-button-2").removeClass(ofour).addClass(color);

        ofour = color;
    });
    //change 05 ofive color
    var ofive = "grey-cascade"
    $("#ofiveSelect").change(function(){
        var color = $("#ofiveSelect").val()

        $("#AdviserHUB").contents().find("#ofive-div-1").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-2").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-3").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-4").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-5").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-6").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-7").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-8").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-9").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-div-10").removeClass("font-"+ofive).addClass("font-"+color);
        $("#AdviserHUB").contents().find("#ofive-span-1").removeClass("font-"+ofive).addClass("font-"+color);


        ofive = color;
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








