var workshop_info = [
{name:"1",
 background:"url(images/rc.png)",
 },

{ name:"2",
  background:"url(images/vs.png)",
},

{ name:"3",
  background:"url(images/rt.png)",
},

{ name:"4",
  background:"url(images/rm.png)",
},

]

var string = "";
workshop_info.forEach((el, i)=>{
	string += "<div class='ws' style='background:" + el.background + "'>\
			      <div class='wsimage'>\
			      </div>\
			<div class='title'><a href ='#'>" + el.name + "</a></h2>\
		</div>"
})
string += "</div>";
document.getElementById("wscontent").innerHTML = string;

function openinfo(e) {
var box = document.querySelector(".banda");
var desc1 = document.querySelector(".desc");
var n = document.querySelectorAll(".banda").length;