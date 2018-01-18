var logo = document.getElementById("logo");
var list = document.querySelector("header ul");
var tap = document.getElementById("tapformenu");

logo.onclick = function() {
    if(window.innerWidth < 600)
        tap.click();
    else
        navigate("./index.html");
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

// 

window.onload = function texteffect(){    
   function createstylesfortech(){    

//     for(var i = 0;i < 14;i++) {     
//         var style =
//         document.createElement('style'); style.type = 'text/css'; 
//         if(window.innerWidth > 768){
//             style.innerHTML = '.techstyle' + i + ' { text-shadow: ' + (i-9)*1.25 + 'px 5px #9C82FD,' + (.8*i
//                 -9)*1.75 + 'px 5px #7DA7FC; }';
//         }
//         document.getElementsByTagName('head')[0].appendChild(style);
// }

  for(var i = 0;i < 14;i++) {     
var style =
document.createElement('style'); style.type = 'text/css'; 
style.innerHTML = '.techstyle' + i + ' { text-shadow: ' + (i-7)*1.65*0.05 + 'vmax 5px #9C82FD,' + (.8*i
-7)*2.35*0.05 + 'vmax 5px #7DA7FC; }';
setTimeout((function(){
    // console.log('put')
    document.getElementsByTagName('head')[0].appendChild(this.style)
}).bind({
    "style": style
}), 100);


            // document.getElementById('techfest').className = 'techfest'+ i +' tech';
        }; 
    }  
    function createstylesforfest(){    


  for(var i = 14;i <= 18;i++) {     
var style =
document.createElement('style'); style.type = 'text/css'; 
style.innerHTML = '.techstyle' + i + ' { text-shadow: ' + (i+1)*(2)*0.05 + 'vmax 5px #9C82FD,' + (i+1)*3.8*0.05 + 'vmax 5px #7DA7FC; }';
setTimeout((function(){
    // console.log('put')
    document.getElementsByTagName('head')[0].appendChild(this.style)
}).bind({
    "style": style
}), 300);

            // document.getElementById('techfest').className = 'techfest'+ i +' tech';
        }; 
    }  

    createstylesfortech();
    createstylesforfest();

    // var mystr = document.getElementById("techfest").innerHTML;
    // mystr = mystr.split("");
    // console.log(mystr);
    // var newstr = "";
    // for (var i = 0, len = mystr.length; i < len; i++) {
    //     newstr += '<span class="techstyle' + i + '">' + mystr[i] + '</span>';
    // }
    // console.log(newstr);

    // document.getElementById("techfest").innerHTML = "" + newstr + ""; 
    // document.getElementById("techfest").innerHTML = wrapSpan(newstr); 
    letterAnimation(document.querySelector("#techfest"), "techstyle")
    // letterAnimation(document.getElementById("techfest2"), "feststyle")

    // var mystr2 = document.getElementById("techfest2").innerHTML;
    // mystr2 = mystr2.split("");
    // console.log(mystr2);
    // var newstr2 = "";
    // for (var i = 0, len = mystr2.length; i < len; i++) {
    //     newstr2 += '<span class="feststyle' + i + '">' + mystr2[i] + '</span>';
    // }
    // console.log(newstr2);
    // document.getElementById("techfest2").innerHTML = "" + newstr2 + ""; 

}


// (i-9)*1.25
// (.8*i
// -9)*1.75
// (i+1)*(2)
// (i+1)*3.8