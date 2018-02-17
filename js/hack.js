var hackathons = [
{
	name:"IBM Online Hackathon",
	background:"url(images/hack1.jpg)",
	url: "https://www.bits-apogee.org/ibmhackathon"
},
{
	name:"Exxon Mobil Hackathon",
	background:"url(images/exxon.jpg)",
	url: "https://www.bits-apogee.org/exxonmobil"
}
]

var string = "";
hackathons.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <a style = 'text-decoration:none;' href = '"+el.url+"' target='_blank'><div class='wsimage' style='background:" + el.background + "; background-position: center; background-size: contain'>\
			      </div>\
			      <div  class='wstltWK' id=" + ++i + "><p id="+ ++i + ">" + el.name +"\
			      </p></div></a>\
			      </div>\
		</div>"
})

document.getElementById("wscontainer").innerHTML = string;

var hacks_info = [
{name:"1",
 info:"<b style='font-size:2em'>Will be updated soon</b>\
   <br/><br/> <b style='font-size:1.25em'> For registration visit </b>\
   <br/><br/><a style='color:#fff' href='www.bits-apogee.org/ibmhackathon'> IBM Hackathon </a> ",
},




]
function closebox(){
	$("#boxcontainer").fadeOut(1000) ;
}
// var box = document.querySelector(".wstlt");
// function nm(){
	 
    //$(".wstltWK").click(openinfo);
    function openinfo(e){
    console.log($(e.target).attr('id'));
    var box = $(e.target).attr('id');
    var string2 ="";
   
console.log(hacks_info[box-1].name);
	string2 += " <div class='heading'>\
                  <div id='head'>\
                <label>" + hackathons[box-1].name +"</label>\
                <label>" + hackathons[box-1].name +"</label>\
                <label>" + hackathons[box-1].name +"</label>\
            </div>\
            <div>\
	              <p class='infotext'>" + hacks_info[box-1].info +"\
			      </p>\
			      <p class='close' onclick='closebox()'><img src='img/back.svg'>\
			      </p>\
		</div>"        
		


document.getElementById("boxcontainer").innerHTML = string2;
$("#boxcontainer").fadeIn(1000) ;

};


// var desc1 = document.querySelector(".desc");
// var n = document.querySelectorAll(".banda").length;
