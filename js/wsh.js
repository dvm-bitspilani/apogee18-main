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
{ name:"IMPACTLABS",
  background:"url(images/naoBot2.png)",
},


]

var string = "";
workshops.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimage' style='background:" + el.background + "'>\
			      </div>\
			      <div  class='wstltWK' id=" + ++i + "><p id="+ ++i + ">" + el.name +"\
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
  info:"<b style='font-size:1.5em'>2-DAY WORKSHOP ON IOT</b> \
        <br/><br/><b style=' font-size:1.25em;text-decoration:underline'>Session: 1. Introductions To Industrial IOT</b>\
        <br/><br/><span style='text-align:right'> Introduction Of Industrial IOT.</span>\
        <br/><span style='text-align:right'> Classification Of Industrial IOT.</span>\
        <br/><span style='text-align:right'> History Of Automation.</span>\
        <br/><span style='text-align:right'> Scope Of Industrial IOT.</span>\
        <br/><span style='text-align:right'> Career Prospects of IOT.</span>\
         <br/><br/><b style='font-size:1.25em;text-decoration:underline'>Session: 2. Introductions To Controlling Devices</b>\
        <br/><br/><span style='text-align:left'> Relay And Electrical Control.</span>\
        <br/><span style='text-align:left'> Electronic Controller And Pid Controller.</span>\
        <br/><span style='text-align:left'> Programmable Logic Controller (Plc).</span>\
        <br/><span style='text-align:left'> Scada (Tools & Usage)</span>\
         <br/><br/><b style='font-size:1.25em;text-decoration:underline'>Session: 3. Exposure To Relay System</b>\
        <br/><br/><span style='text-align:left'> Introduction Of Industrial IOT.</span>\
        <br/><span style='text-align:left'> Relay Based Control System</span>\
        <br/><span style='text-align:left'> Switching Theory.</span>\
        <br/><span style='text-align:left'> Introduction To Timer And Counter.</span>\
        <br/><br/><b style='font-size:1.25em;text-decoration:underline'>Session: 4.Introduction To PLC</b>\
        <br/><br/><span style='text-align:left'> Hardware Architecture.</span>\
        <br/><span style='text-align:left'> Advantage Over Other Controller.</span>\
        <br/><br/><b style='font-size:1.25em;text-decoration:underline'>Session: 5. Query & Doubt Clearance Session</b>\
        <br/><br/><span style='text-align:left'> Query & Doubt Clearance Session.</span>\
        <br/><span style='text-align:left'> Competition Based On Industrial</span>\
        <br/><span style='text-align:left'> Q & A Session</span>\
        <br/><span style='text-align:left'> Awards & Certificates Of Honour To Winners.</span>\
        <br/><span style='text-align:left'> Certificates Of Appreciation To Selected Participants.</span>\
        <br/><span style='text-align:left'> Certificates Of Participation To All Participants.</span>",
 },

{ name:"4",
  info:" <b style='font-size:1.25em'>2-DAY WORKSHOP ON ANSYS\
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
	 
    $(".wstltWK").click(openinfo);
    function openinfo(e){
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
			      <p class='close' onclick='closebox()'><img src='img/back.svg'>\
			      </p>\
		</div>"        
		


document.getElementById("boxcontainer").innerHTML = string2;
$("#boxcontainer").fadeIn(1000) ;

};


// var desc1 = document.querySelector(".desc");
// var n = document.querySelectorAll(".banda").length;
