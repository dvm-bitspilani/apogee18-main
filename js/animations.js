(function init(){
	var links = document.querySelectorAll('.link');
	console.log(links);
	Array.prototype.forEach.call(links, (el)=>{
		var name = el.innerText;
		var spans = "";
		var step = (.25)/(name.length);
		// console.log(step, spans.length);
		name.split('').forEach((letter, index)=>{
			spans += ("<span class='letter' style='transition-delay: " + step*(index+1) + "s'>" + letter + "</span>");
		})

		var string = "<span class='top'>" + spans + "</span><span class='base'>" + spans + "</span>";
		el.innerHTML = string;

		el.addEventListener('mouseenter', ()=>{
			el.className += " hover_animation";
			setTimeout(()=>{
				el.className += " hover_animation_done"
			}, 100)
		})

		el.addEventListener('mouseleave', ()=>{
			var name = el.className;
			el.className = name.replace(new RegExp(" hover_animation hover_animation_done", 'g'), "") + " hover_animation_remove";
			setTimeout(()=>{
				el.className = el.className.replace(new RegExp(" hover_animation_remove", 'g'), "")
			}, 200)
		})
	})

})();

