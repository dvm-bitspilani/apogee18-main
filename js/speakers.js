var speakers = [
{name:"DANIELLE FIENBERG",
 background:"url(images/Mitrabot2.png)",
 },

{ name:"RAVI SUBRAMANIYAM",
  background:"url(images/naoBot.png)",
},

{ name:"VASU PREMLANI",
  background:"url(images/puzzlebox.png)",
},

]

var string = "";
speakers.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimageSPKR' style='background:" + el.background + "'>\
			      </div>\
			      <p id="+ ++i + " class='wstltSPKR' >" + el.name +"\
			      </p>\
			      </div>\
		</div>"
})

document.getElementById("wscontainer").innerHTML = string;

var workshop_info = [
{name:"1",
 info:"COMING SOON",
},

{ name:"2",
  info:"COMING SOON",
},

{ name:"3",
  info:"COMING SOON",
},

]
function closebox(){
	$("#boxcontainer").fadeOut(1000) ;
}
// var box = document.querySelector(".wstlt");
// function nm(){
	$(".wstlt").click(function (e) {
    console.log($(e.target).attr('id'));
    var box = $(e.target).attr('id');
    var string2 ="";
   
console.log(workshop_info[box-1].name);
	string2 += " <div class='heading'>\
                  <div id='head2'>\
                <label>" + speakers[box-1].name +"</label>\
                <label>" + speakers[box-1].name +"</label>\
                <label>" + speakers[box-1].name +"</label>\
            </div>\
            <div>\
	              <p class='infotext'>" + workshop_info[box-1].info +"\
			      </p>\
			      <p class='close' onclick='closebox()'><img src='img/back.svg'>\
			      </p>\
		</div>"        
		


document.getElementById("boxcontainer").innerHTML = string2;
$("#boxcontainer").fadeIn(1000) ;

});


// var desc1 = document.querySelector(".desc");
// var n = document.querySelectorAll(".banda").length;
