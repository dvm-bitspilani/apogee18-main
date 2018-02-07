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

var workshop_info = [
{name:"1",
 info:"<b style='font-size:1.25em'>Proposal for Aeromodelling Boot camp: with FPV Drone.</b>\
   <br/><br/> <b style='font-size:1.25em'> ABOUT US</b> <br/><br/>SDIoT is the most exclusive, invitation-only, network of high-caliber tech enthusiast who wants to make themark in the field of Smart Devices and Internet of Things. We lead our tech buddy on their technologicaltransformation, providing innovative next-generation technology solutions and services that leverage deepindustry expertise and an extensive partner community. ",
},

{ name:"2",
  info:"<b style='font-size:2em'>Will be updated soon</b>",
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
        <br/><br/>For more information see the pdf\
        <br/> <a href='./extras/ANSYS.pdf'> more info</a>",
},
{ name:"5",
  info:"<b style='font-size:1.25em'>2-DAY WORKSHOP ON CLOUD COMPUTING BY CETPA\
        <br/><br/>For more information see the pdf\
        <br/> <a href='./extras/Cloud Computing.pdf'> more info</a>",
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
  info:"<b style='font-size:2em'>Will be updated soon</b>",
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

