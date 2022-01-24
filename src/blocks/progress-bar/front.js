document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		Array.prototype.slice
			.call(document.getElementsByClassName("dbe_progress-bar"))
			.forEach((instance) => {
				instance.classList.add("dbe_progress-bar-filled");
			});
	}, 500);
});
