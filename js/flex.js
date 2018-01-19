var flex =document.querySelector(".flex");
function sad(el) {
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
    },500);

}
    document.querySelector("#close").onclick = function()
{
    document.querySelector(".flex.active").className="flex";

    setTimeout(()=>{document.querySelector(".flex").style.display="none"},300);

}

