Array.prototype.slice
	.call(document.getElementsByClassName("dbe-advanced-video-thumbnail"))
	.forEach((instance) => {
		instance.addEventListener("click", function () {
			instance.setAttribute("hidden", true);
			instance.nextElementSibling.removeAttribute("hidden");
		});
	});
