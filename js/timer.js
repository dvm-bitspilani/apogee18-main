
var TARGET = new Date(2018, 1, 4);

function updateTimer(){
	var now = new Date();
	var ms = (TARGET - now);
	if(ms < 0){
		var footer = document.querySelector('footer');
		footer.removeChild(footer.querySelector('.offer'))
		return;
	}
	var s = Math.floor(ms/1000);
	var SECONDS = s%60;
	var m = Math.floor(s/60);
	var MIN = m%60;
	var h = Math.floor(m/60);
	console.log(h, m, s);
	document.querySelector('.hours').innerHTML = span(padd(h.toString(), 2));
	document.querySelector('.minutes').innerHTML = span(padd(MIN.toString(), 2));
	document.querySelector('.seconds').innerHTML = span(padd(SECONDS.toString(), 2));
	setTimeout(updateTimer, 1000);
}

function span(text){
	var string = "";
	text.split("").forEach((el, i)=>{
		string += "<span class='time-span'>"+el+'</span>';
	})
	return string;
}

function padd(text, n){
	if(text.length == n)return text;
	return padd("0" + text, n);
}

updateTimer();