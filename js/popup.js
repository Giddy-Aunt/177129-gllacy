var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback-popup");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".feedback-close-btn");
				
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	overlay.classList.add("overlay-show");
});
				
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
	overlay.classList.remove("overlay-show");
});
				
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (popup.classList.contains("popup-show")) {
	popup.classList.remove("popup-show");
	overlay.classList.remove("overlay-show");
	}
	}
});