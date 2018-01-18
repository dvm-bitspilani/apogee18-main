var flex =document.querySelector(".flex");
function sad(el) {
    var e = el;
    for (var lx=0, ly=0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    flex.style.display="block";
    flex.style.left=lx+"px";
    flex.style.width="400px";   
    flex.style.height="200px";   
    flex.style.top=ly+"px";
    
    setTimeout(()=>{flex.className+=" active"},50);

}
    document.querySelector("#close").onclick = function()
{
    document.querySelector(".flex.active").className="flex";

    setTimeout(()=>{document.querySelector(".flex").style.display="none"},300);

}

