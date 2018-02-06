var speakers = [
{
	name:"DANIELLE FEINBERG",
	desc: "Director of Photography, Pixar",
	background:"url(images/DANIELLE.png)",
 },

 {
	name:"VASU PREMLANI",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"RAVI SUBRAMANIYAM",
	desc: "Bestselling Thriller Author",
  background:"url(images/RAVSUB.png)",
},

{
	name:"SUDHA MENON",
	desc: "Author and Columnist",
  background:"url(images/SUDHA.jpg)",
},

{
	name:"GURMEHAR KAUR",
	desc: "Indian Student Activist",
  background:"url(images/GURMEHAR.jpg)",
},

{
	name:"DAVID STORK",
	desc: "Distinguished Research Scientist",
  background:"url(images/DAVID.png)",
},

{
	name:"ACM 1",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"ACM 2",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"ACM 3",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"SHRADHA SHARMA",
	desc: "CEO & Founder, YourStory",
  background:"url(images/SHRADHA.jpg)",
},

{
	name:"VINEET BAJPAI",
	desc: "Author of National Bestsellers - Pralay and Harappa",
  background:"url(images/VINEET.jpg)",
},

{
	name:"BBC 1",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"BBC 2",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"BBC 3",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

{
	name:"BBC 4",
	desc: "Stand-up comedian and Environmentalist",
  background:"url(images/VASU.png)",
},

]

var string = "";
speakers.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimageSPKR' id=" + ++i + " style='background:" + el.background + "; background-size: cover; background-position: center'>\
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
