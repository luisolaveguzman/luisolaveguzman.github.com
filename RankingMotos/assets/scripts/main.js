// JavaScript Document

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");
let elementList = document.querySelectorAll(".fa-star");

elementList.forEach(function(element){
	element.addEventListener('click', function(){
		element.classList.remove("far");
		element.classList.add("fas");
	})
})


closes.forEach(function(close){
	close.addEventListener('click', function(ev){
		ev.preventDefault();
		content.classList.remove("animated");
		content.classList.remove("slideInDown");
		content.classList.add("animated");
		content.classList.add("fadeOutDown");
		setTimeout(() => {
			location.href="../../index.html";
		}, 200);
		
	})
})

