function makeEvent(id) {
    var c = window.colors[id] || ["#FFFFFF","#000000"]
    var f = c[0];
    var b = c[1];
    return '\
    <div class="event" _b="'+b+'" _id="'+id+'">\
        <div class="back-a" style="background: '+f+'"></div>\
        <div class="back-b" style="background: '+f+'"></div>\
        <div class="back-c" style="background: '+f+'"></div>\
        <div class="back-d" style="background: '+f+'"></div>\
        <div class="content" onclick="sad(this)" style="background-image: url(event_img/'+id+'.jpg)"></div>\
    </div>\
    ';
}
function makeDescription(name) {
    return '\
    <div class="desc">\
        <h3>'+name+'</h3>\
    </div>\
    ';
}

$(document.body).on("click","#eventCat li",function(e){
    if(typeof(window.cats) === "undefined") return;
    var cid = $(e.target).attr('_id');
    var events = window.cats.filter(function(obj){return obj.id == cid})[0].events;
    $("#events")[0].innerHTML = "";
    $("#descs")[0].innerHTML = "";
    for(var ei = 0; ei <= events.length; ei++) {
        if(ei==events.length) { resetEvents(); continue; }
        $("#events").append(makeEvent(events[ei].id));
        $("#descs").append(makeDescription(events[ei].name));
    }

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
    else {
        $("#eventCat li").removeClass("selected");
        $(e.target).addClass("selected");
        $("#eventCat").removeClass("inactive");
    }
});
$("#nextEvent").click(function(){
    var aw = $(".event")[0].clientWidth;
    if(parseInt($($(".event")[0]).css('margin-left')) >= - $('.event').length*440 + 880) {
        $($(".event")[0]).css('margin-left',"-="+(aw+40)+"px");
        $($(".desc")[0]).css('margin-left',"-="+(aw+40)+"px");
    }
});
$("#prevEvent").click(function(){
    var aw = $(".event")[0].clientWidth;
    if(parseInt($($(".event")[0]).css('margin-left')) < 20) {
        $($(".event")[0]).css('margin-left',"+="+(aw+40)+"px");
        $($(".desc")[0]).css('margin-left',"+="+(aw+40)+"px");
    }
});