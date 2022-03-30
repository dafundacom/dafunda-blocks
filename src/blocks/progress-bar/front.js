document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		Array.prototype.slice
			.call(document.getElementsByClassName("progress-bar"))
			.forEach((instance) => {
				instance.classList.add("progress-bar-filled");
			});
	}, 500);
});
