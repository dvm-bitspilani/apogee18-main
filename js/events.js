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