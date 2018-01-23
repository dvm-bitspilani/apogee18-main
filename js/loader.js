
var cover = document.getElementById("mask");
var coverbefore = document.getElementById("mask::before");
var container = document.getElementById("apogee_container");
var ldd = 0;
var x=0;

function loading(){
    var abc = setInterval(function animate(){
    window.onload = function(){ldd = 1;};
// var w = $("#mask").width() ;
    console.log(x);

   if(ldd != 1 && x<50)
   { cover.style.width = x + '%';
     x=x+5;
   }
   else if(ldd == 0 && x >= 50)      
    { console.log("clr");
      open();
      clearInterval(abc);
    }
   else if(ldd==1)
    { console.log("1");
      alreadyloaded();
      clearInterval(abc);}
     },100)
}

function open(){
      console.log(ldd);
      $(window).load(function() {
         cover.style.width = "100%" ;console.log("exe")
         setTimeout(function(){ $('.preloader__mask').addClass('extra');
         $('.apogee_stensil').css('background-position', '60vw');
         setTimeout(function display(){   
              document.querySelector("#loader-container").style.display="none";
              $("#main-container").fadeIn("slow");
         },2000)
    console.log("ldd");},2000)})
}

function alreadyloaded(){
       cover.style.width = "100%" ;
       setTimeout(function(){
           $('.preloader__mask').addClass('extra');
           $('.apogee_stensil').css('background-position', '60vw');
        console.log("ldd");
               setTimeout(function display(){   
                   $("#loader-container").fadeOut("slow");
                   $("#main-container").fadeIn("slow");
               },1000)
       },2000)
}
var start = setTimeout(loading, 100);
alreadyloaded();