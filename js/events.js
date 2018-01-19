$(document.body).on("click","#eventCat li",function(e){
    console.log(e);
    if(document.body.clientWidth <= 600) {
        if($("#eventCat").hasClass("inactive")) {
            $("#eventCat li").addClass("visible");
            $("#eventCat").addClass("active");
            $("#eventCat").removeClass("inactive");
        }
        else {
            $("#eventCat li.selected").removeClass("selected");
            $("#eventCat li").removeClass("visible");
            $(e.target).addClass("selected");
            $("#eventCat").addClass("inactive");
            $("#eventCat").removeClass("active");
        }
    }
});
$("#nextEvent").click(function(){
    if(parseInt($($(".event")[0]).css('margin-left')) >= - $('.event').length*440 + 880) {
        $($(".event")[0]).css('margin-left',"-=440px");
        $($(".desc")[0]).css('margin-left',"-=440px");
    }
});
$("#prevEvent").click(function(){
    if(parseInt($($(".event")[0]).css('margin-left')) < 20) {
        $($(".event")[0]).css('margin-left',"+=440px");
        $($(".desc")[0]).css('margin-left',"+=440px");
    }
});