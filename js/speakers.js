var speakers = [
{
	name:"DANIELLE FEINBERG",
	desc: "Director of Photography, Pixar",
	background:"url(images/DANIELLE.png)",
 },

{
	name:"RAVI SUBRAMANIYAM",
	desc: "Bestselling Thriller Author",
  background:"url(images/RAVSUB.png)",
},

{
	name:"VASU PREMLANI",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

]

var string = "";
speakers.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimageSPKR' id=" + ++i + " style='background:" + el.background + "'>\
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
