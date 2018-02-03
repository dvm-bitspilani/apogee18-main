var workshops = [
{name:"SDIOT",
 background:"url(images/Mitrabot2.png)",
 },

{ name:"BIGDATA",
  background:"url(images/naoBot.png)",
},

{ name:"IOT",
  background:"url(images/puzzlebox.png)",
},

{ name:"ANSYS",
  background:"url(images/mitraBot.png)",
},
{ name:"CLOUD COMPUTING",
  background:"url(images/naobot.png)",
},
{ name:"ECO & FIN WORKSHOP",
  background:"url(images/mitraBot2.png)",
},
{ name:"IMPACTSLAB",
  background:"url(images/naoBot2.png)",
},


]

var string = "";
workshops.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimage' style='background:" + el.background + "'>\
			      </div>\
			      <div id="+ ++i + " class='wstlt' ><p>" + el.name +"\
			      </p></div>\
			      </div>\
		</div>"
})

document.getElementById("wscontainer").innerHTML = string;

var workshop_info = [
{name:"1",
 info:"<b style='font-size:1.25em'>Proposal for Aeromodelling Boot camp: with FPV Drone.</b>\
   <br/><br/> <b style='font-size:1.25em'> ABOUT US</b> <br/><br/>SDIoT is the most exclusive, invitation-only, network of high-caliber tech enthusiast who wants to make themark in the field of Smart Devices and Internet of Things. We lead our tech buddy on their technologicaltransformation, providing innovative next-generation technology solutions and services that leverage deepindustry expertise and an extensive partner community. ",
},

{ name:"2",
  info:"",
},

{ name:"3",
  info:"<b style='font-size:1.25em'>2-DAY WORKSHOP ON IOT BY CETPA\
        <br/><br/>For more information see the pdf <a href='./extras/IOT.pdf'> more info</a>",
},

{ name:"4",
  info:" <b style='font-size:1.25em'>2-DAY WORKSHOP ON ANSYS BY CETPA\
        <br/><br/>For more information see the pdf <a href='./extras/Cloud Computing.pdf'> more info</a>",
},
{ name:"5",
  info:"<b style='font-size:1.25em'>2-DAY WORKSHOP ON CLOUD COMPUTING BY CETPA\
        <br/><br/>For more information see the pdf <a href='./extras/Cloud Computing.pdf'> more info</a>",
},
{ name:"6",
  info:"url(images/mitrabot.jpg)",
},
{ name:"7",
  info:"url(images/naobot.jpg)",
},
{ name:"8",
  info:" Gone are the days when robots were just a part of sci-fi! Now, not only have they transcended into reality, but will soon be as close to us as Doraemon was to Nobita!So, this February, gear up to be dazzled by the extraordinary abilities of this amazing human creation!",
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
                <label>" + workshops[box-1].name +"</label>\
                <label>" + workshops[box-1].name +"</label>\
                <label>" + workshops[box-1].name +"</label>\
            </div>\
            <div>\
	              <p class='infotext'>" + workshop_info[box-1].info +"\
			      </p>\
			      <p class='close' onclick='closebox()'><--\
			      </p>\
		</div>"        
		


document.getElementById("boxcontainer").innerHTML = string2;
$("#boxcontainer").fadeIn(1000) ;

});


// var desc1 = document.querySelector(".desc");
// var n = document.querySelectorAll(".banda").length;
