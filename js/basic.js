var logo = document.getElementById("logo");
var list = document.querySelector("header ul");
var tap = document.getElementById("tapformenu");

logo.onclick = function() {
    tap.click();
};

tap.onclick = function() {
    switch (this.className){
        case "logo":
            this.className = "menu";
            this.innerHTML = "TAP HERE TO CLOSE";
            logo.className = "hidden";
            list.className = "";
            break;
        default:
            this.className = "logo";
            this.innerHTML = "TAP LOGO FOR MENU";
            logo.className = "";
            list.className = "hidden";
    }
};

function navigate(page) {
    window.location.href = page;
}