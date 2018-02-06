var flex =document.querySelector(".flex");


function sad(el) {
    $.ajax({
        url: "https://bits-apogee.org/2018/api/events/"+$(el).parent().attr('_id')+"/",
        method: "GET",
        success: function(data) {
            if(data.content_rich == "NA")
                $("#fl_desc").html(data.content);
            else
                $("#fl_desc").html(data.content_rich);
            $("#fl_rules").html(data.detail_rules + '<a href="./Rules_booklet.pdf" id="pdf">Download rules booklet</a>');
            $("#fl_contact").html(data.contact);
            // $("#category").html(data.category_name);
            $("#heading").html(data.name);
        },
        error: function(err) {
            console.error(err);
            alert("Error fetching event details. Check error console.");
        }
    });
    var e = el;
    for (var lx=0, ly=0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    flex.style.display="block";
    flex.style.left=lx+"px";
    flex.style.width=$(".event")[0].clientWidth;   
    flex.style.height=$(".event")[0].clientHeight;   
    flex.style.top=ly+"px";
    flex.style.backgroundImage = e.style.backgroundImage;
    
    setTimeout(()=>{flex.className+=" active"},50);
    setTimeout(function(){
        flex.style.backgroundImage = "";
        flex.style.backgroundColor = $(e).parent().attr('_b');
        $(".flex .head").fadeIn("fast");
        $(".flex .flex-content").fadeIn("fast");
    },500);

}


document.querySelector("#close").onclick = function() {
    document.querySelector(".flex.active").className="flex";
    $(".flex .head").fadeOut("fast");
    $(".flex .flex-content").fadeOut("fast");
    setTimeout(()=>{document.querySelector(".flex").style.display="none"},300);

}

