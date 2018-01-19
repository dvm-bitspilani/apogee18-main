$(function init(){
	if(window.innerWidth>768){
		var links = document.querySelectorAll('.link');
		// console.log(links);
		Array.prototype.forEach.call(links,letterAnimation)
	}
});

function letterAnimation(el, pre,{trigger=null}={}){
	var name = el.innerText;
	var spans = "";
	var step = (.25)/(name.length);
	// var step = 0.05;
	// console.log(step, spans.length);
	name.split('').forEach((letter, index)=>{
		// console.log(letter, index)
		spans += ("<span class='letter "+ pre + index+ "' style='transition-delay: " + step*(index+1) + "s'>" + letter + "</span>");
	})

	var string = "<span class='top'>" + spans + "</span><span class='base'>" + spans + "</span>";
	el.innerHTML = string;
	var trigger = trigger || el;
	// console.log(trigger)
	trigger.addEventListener('mouseenter', ()=>{
		trigger.className += " hover_animation";
		setTimeout(()=>{
			trigger.className += " hover_animation_done"
		}, 100)
	})

	trigger.addEventListener('mouseleave', ()=>{
		var name = trigger.className;
		trigger.className = name.replace(new RegExp(" hover_animation hover_animation_done", 'g'), "") + " hover_animation_remove";
		setTimeout(()=>{
			trigger.className = el.className.replace(new RegExp(" hover_animation_remove", 'g'), "")
		}, 200)
	})
}

window.letterAnimation = letterAnimation;
