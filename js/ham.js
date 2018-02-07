function showMenu() {
    document.getElementById('hammenu').style.transform = "translateX(0)";
}

function hideMenu() {
    document.getElementById('hammenu').style.transform = "translateX(-100%)";
}

document.getElementById("logo").onclick = function(e) {
    e.stopPropagation();
}

tap.onclick = function() {
    
}