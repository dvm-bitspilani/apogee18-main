var workshops = [
{name:"SDIOT",
 background:"url(img/sdiot.png)",
 },

{ name:"BIGDATA",
  background:"url(img/bdata.png)",
},

{ name:"IOT",
  background:"url(img/iot.png)",
},

{ name:"ANSYS",
  background:"url(img/ansys.png)",
},
{ name:"CLOUD COMPUTING",
  background:"url(img/cloud.png)",
},
{ name:"BSE Trading",
  background:"url(img/bse.png)",
},
{ name:"IMPACTLABS",
  background:"url(images/imlab.jpg)",
},


]

var string = "";
workshops.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimage' id=" + ++i + " style='background:" + el.background + ";background-size:contain'>\
			      </div>\
			       <p  class='wstltWK' id=" + i + " >" + el.name +"\
			      </div>\
		</div>"
})

document.getElementById("wscontainer").innerHTML = string;
document.getElementById("wscontainer").style.textAlign = "justified";
var workshop_info = [
{name:"1",
 info:"\
   <br/><br/><b>Day-1 Session-1 (Theory)</b><br>\
▣ Physics of flying<br>\
▣ Aeromodeling overview with demo on<br>\
▣ Control Surfaces -- Airplane<br>\
▣ Control Systems -- Drone<br>\
<b>Day-1 Session-2 (Hands-on)</b><br><br>\
▣ Best practice to build and fly<br>\
▣ Get familiar with drone parts<br>\
▣ Their use and functioning<br>\
▣ Radio controller<br><br>\
<b>Day-1 Session-3 (Hands-on)</b><br>\
▣ Simulator session: Learn how to fly multirotors.<br>\
▣ Live drone flight demonstration<br>\
▣ Indoor Flying Experience with Tiny Whoops<br/><br>\
<b>Day-2 Session-4 (Hands-on)</b><br><br>\
▣ Simulator session: Learn how to fly multirotors.<br>\
▣ Live drone flight demonstration<br>\
▣ Indoor Flying Experience with Tiny Whoops<br>\
▣ Building & flying self-built drone:<br>\
 (Trainer will perform a live drone build)<br>\
▣ Using IAP to flash firmware on flight controller<br>\
▣ Spares Integration and Calibration<br>\
▣ Before flight check-ups<br>\
Day-2 Session-5 (Projects)<br><br>\
▣ Telemetry Radio and RC Transmitter Setup<br>\
▣ Preparing drone for crash scenarios<br>\
▣ Best flying practices ( 3-mistakes high)<br>\
Day-2 Session-6 (Wrap-up)<br><br>\
▣ SDIoT DIY Project Demos<br>\
▣ Virtual Reality<br>\
▣ Drone Airshow (With drone built during session)<br>\
and #SkySelfie for Participants<br>\
▣ Awards Ceremony<br><br><br><b style='font-size:1.25em'>Videos to Watch</b><br><a style='color:white' href=\"https://www.youtube.com/watch?v=1Cdq2R6oxII&t=2s\" target=\"_blank\">BITS Pilani video APOGEE 17</a><br><a style='color:white' href=\"https://www.youtube.com/watch?v=MtG-dwjILsU&t=27s\" target=\"_blank\">FeedBack video</a><br><br><br><b style='font-size:1.25em'>Documents</b><br><br><a style='color:white' href=\"workshops/sdiot2.pdf\" target=\"_blank\">SDIoT - FPV Drone</a>",
},

{ name:"2",
  info:"<b style='font-size:2em'>BIG DATA &mdash; HADOOP Workshop Details</b><br><br>This workshop on BIG DATA &mdash; HADOOP will cover RDBMS Basics, File &amp; Tablespace management, Big Data concepts, Basic HADOOP concepts, HADOOP distributed file system and a dedicated doubt session. Please refer to the PDF below for more details.<br><br><a style='color:white' href=\"workshops/hadoop.pdf\" target=\"_blank\">HADOOP WORKSHOP DETAILS</a>",
},

{ name:"3",
  info:"<b style='font-size:2em'>IoT Workshop Details</b><br><br>This workshop on Internet of Things will cover Industrial IoT introduction, controlling devices, Relay systems, PLC and a dedicated doubt session. Please refer to the PDF below for more details.<br><br><a style='color:white' href=\"workshops/iot.pdf\" target=\"_blank\">IoT WORKSHOP DETAILS</a>",
 },

{ name:"4",
  info:"<b style='font-size:2em'>ANSYS Workshop Details</b><br><br>This workshop will cover multiple topics over seven sessions. Please refer to the PDF below for more details.<br><br><a style='color:white' href=\"extras/ANSYS.pdf\" target=\"_blank\">IoT WORKSHOP DETAILS</a>",
},
{ name:"5",
  info:"<b style='font-size:1.25em'>CLOUD COMPUTING BY CETPA\
        <br/><br/>This workshop will cover multiple topics over seven sessions. Please refer to the PDF below for more details.\
        <br/> <a style='color:white' target='_blank' href='./extras/Cloud Computing.pdf'>CLOUD COMPUTING WORKSHOP DETAILS</a>",
},
{ name:"6",
  info:'<b>DALAL STREET EXCLUSIVE</b>\
\
Event 1: BSE Ltd. Workshop<br>\
A 3 hour extensive workshop jointly conducted by the Bombay Stock Exchange & the Securities & Exchange Board of India (SEBI) on "Trading in the Stock Markets".\
To cover topics such as :<br>\
Introduction to Savings & Investments<br>\
Basics of Budgeting, Inflation effects on Investments, Risk & Return<br>\
Choosing the Right Investment Options<br>\
Asset Allocation Strategies & various products available<br>\
Investor Protection & Grievance Redressal Mechanism.<br>\
Venue: NAB Audi<br>\
Incentives: Certificate of Participation to all.<br>\
\
Established in 1875, the BSE is Asia\'s 1st Stock Exchange and the world\'s fastest with a median trade speed of 6 microseconds. With its Screen\ based Trading platform BOLT, the exchange handles over 8 Million daily transactions totaling a Market Capitalization of over $ 2 Trillions.\
<br><br>\
Event 2: \'SMiLE\'\
\
Presenting this APOGEE, at the BITS Business Conclave, India\'s renowned and one of the most successful Stock Market Gurus of all time. Learn from the mantras of the "Market Master" himself & enrich your Stock Portfolios. <br>\
\
Invest Like a Bull, Sit Like a Bear & Watch Like an Eagle !!<br>\
Venue: NAB Audi<br>\
\
DATE : 23rd February 2018.<br>\
TIME : 1000 - 1300 Hours.<br>\
\
Cost of Workshops - Nil. <br>\
Pre Requisites - None. (Open for all Students, Faculty, Staff.)<br>\
',
},
{ name:"7",
  info:"\
<b>Day 1: Session 1: 1 1⁄2 hours:</b><br><br>\
Talk: Concepts like ideality, most useful function(s), harmful effects, convolution, need for invention, sshaped\
curve in innovative design. Trimming, miniaturization, etc. while retaining functional\
performance of technical systems (products and processes). Examples are shown from all areas of\
engineering.<br><br>\
<b>Day 1: Session 2: 1⁄2 hour:</b><br><br>\
Talk and demonstrate working in Nano-machine lab How to build in Nano-Lab, conceptual and\
embodiment design, use of tools, safety precautions, use of creative innovation, psychological inertias.<br><br>\
<b>Day 1: Session 3: 1⁄2 hour:</b><br><br>\
students form groups & get kits (3 in a group). Small break included.<br><br>\
<b>Day 1: Session 4: 2 hours:</b><br><br>\
Design & prototyping of Nano-LED lighted preset-torque generating screwdriver for night repair.<br><br>\
<b>Day 1 : Session 5: 3 hours:</b><br><br>\
design & build portable, low-cost, folding 2D microscope with nano-LED for detecting malaria and other\
diseases through blood samples (project with support of its inventor, Dr Tunde, PhD(MIT), Co-founder,\
ImpactLabs MIT, MIT)\
Total 7 and 1⁄2 hours<br><br>\
<b>Kit includes:</b><br><br>\
Nano-LED (0.8mm) daylight prewired, SMD LED (less than 0.5mm), mini batteries of 3V each, printed\
sheet for microscope, a tiny borosilicate (glass) ball to act as lens, nano-LED circuit, switch, drill bit,\
hardeners, hot melt adhesive.<br><br>\
<b>The Faculty:</b><br><br>\
Saurabh Kwatra, is currently Expert, Smart Growth Operational Programme , European Commission (2014-20),<br> \
National Centre for Research and Development, Warszawa,<b>Ministry of Science & Higher\
Education, Poland<b><br>\
Facilitator, MIT ImpactLabs Summer Workshop, MIT.<br>\
Workshop coordinated by: Palak Surana : Energy Access Practitioner Network, UN Foundation<br>",
},


]
function closebox(){
	$("#boxcontainer").fadeOut(1000) ;
}
// var box = document.querySelector(".wstlt");
// function nm(){
	 
    $(".wstltWK").click(openinfo);
     $(".wsimage").click(openinfo);
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

