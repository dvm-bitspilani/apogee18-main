var exhibitions = [
{name:"MITRA BOT",
 background:"url(images/Mitrabot2.png)",
 },

{ name:"NAO BOT",
  background:"url(images/naoBot.png)",
},

{ name:"PUZZLE BOX",
  background:"url(images/puzzlebox.png)",
},

{ name:"INDIAN NAVY",
  background:"url(images/2.png)",
},
{ name:"INSPIRED KARTERS",
  background:"url(images/2.png)",
},
{ name:"IMPACTLABS",
  background:"url(images/2.png)",
},
{ name:"BSF-TSU",
  background:"url(images/2.png)",
},


]

var string = "";
exhibitions.forEach((el, i)=>{
	string += "<div class='ws' >\
	           <div class='wsi'>\
			      <div class='wsimageEVT' id=" + ++i + " style='background:" + el.background + "'>\
			      <p  class='wstltEVT' id=" + ++i + " >" + el.name +"\
			      </div>\
			      </p>\
			      </div>\
		</div>"
})

document.getElementById("wscontainer").innerHTML = string;

var workshop_info = [
{name:"1",
 info:"<b style='font-size:1.25em'>ABOUT.</b>\
   <br/><br/> <b style='font-size:1.25em'> Robots, a creation working on your instructions. After the most emotionally enhanced NAO BOT, here comes your entertainment buddy.With the Robot revolution on track, many milestones have been crossed, while INDIA proudly manufactures world’s most advanced commercial robot</b>\
    <br/><br/>Capable of face detection, face recognition, multilingual speech recognition, contextual support, and autonomous navigation; Mitra is a 5 ft tall humanoid, who can get along with you in smart natural conversations and support. Apart from being a commercial asset, it is also capable of being a party buddy by moving around like a loud jukebox playing songs, taking pictures, and also tweeting those out.\
    MITRA BOT was built by a small team of Bangalore based Invento Robotics, which included 14 people including 3 religions, 6 languages and 7 states in India.\
    Unveiled at Global Entrepreneurship Summit in Hyderabad in 2017 by none other than PM Narendra Modi and Ms. Ivanka Trump, daughter of U.S. President Donald Trump, MITRA Bot is now on its way towards APOGEE 2018. Be there at the inauguration ceremony to witness this tech revolution and lend your ears, as this time, it won’t just be humans who shall address the gathering.",
},

{ name:"2",
  info:"<b style='font-size:1.25em'>ABOUT.</b>\
  <br/><br/> <b style='font-size:1.25em'> Gone are the days when robots were just a part of sci-fi! Now, not only have they transcended into reality, but will soon be as close to us as Doraemon was to Nobita!</b>\
  <br/><br/>The invention of Aldebaran, this 58 cm adorable robot holds the capability to perceive his environment and adapt to the world around him. His numerous sensors and degrees of freedom make his movements and thoughts closer to humans. Currently, being used in the fields of research, healthcare and education, NAO Bot is already proving to be an asset to the society!\
  <br/><br/><b style='font-size:1.25em'>So, this February, gear up to be dazzled by the extraordinary abilities of this amazing human creation!<br/> APOGEE brings to you a lifetime opportunity of befriending one of the most emotionally advanced robots in the world - NAO Bot! </b>",
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
    $(".wsimageEVT").click(openinfo);
    $(".wstltEVT").click(openinfo);
    function openinfo(e){
    console.log($(e.target).attr('id'));
    var box = $(e.target).attr('id');
    var string2 ="";
   
console.log(workshop_info[box-1].name);
	string2 += " <div class='heading'>\
                  <div id='head2'>\
                <label>" + exhibitions[box-1].name +"</label>\
                <label>" + exhibitions[box-1].name +"</label>\
                <label>" + exhibitions[box-1].name +"</label>\
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
