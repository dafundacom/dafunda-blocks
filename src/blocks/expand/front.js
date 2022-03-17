if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		let el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

function dbe_getSiblings(element, criteria) {
	const children = Array.prototype.slice
		.call(element.parentNode.children)
		.filter((child) => child !== element);
	return criteria ? children.filter(criteria) : children;
}

Array.prototype.slice
	.call(document.getElementsByClassName("expand-toggle-button"))
	.forEach((instance) => {
		if (instance.getAttribute("aria-controls") === "") {
			const blockID = instance.parentElement.parentElement.id.slice(10);

			instance.setAttribute("aria-controls", `expand-full-${blockID}`);
			if (instance.parentElement.classList.contains("expand-full")) {
				instance.parentElement.setAttribute("id", `expand-full-${blockID}`);
			}
		}

		const togglePanel = () => {
			const blockRoot = instance.closest(".expand");
			blockRoot
				.querySelector(".expand-partial .expand-toggle-button")
				.classList.toggle("hide");

			const expandingPart = Array.prototype.slice
				.call(blockRoot.children)
				.filter((child) => child.classList.contains("expand-full"))[0];

			expandingPart.classList.toggle("hide");

			if (!expandingPart.classList.contains("hide")) {
				Array.prototype.slice
					.call(document.getElementsByClassName("image_slider"))
					.forEach((slider) => {
						const swiper = new Swiper(
							`#${slider.id}`,
							JSON.parse(slider.dataset.swiperData)
						);
					});
			}

			Array.prototype.slice
				.call(expandingPart.querySelectorAll(".wp-block-embed iframe"))
				.forEach((embeddedContent) => {
					embeddedContent.style.removeProperty("width");
					embeddedContent.style.removeProperty("height");
				});
		};

		instance.addEventListener("click", togglePanel);

		instance.addEventListener("keydown", (e) => {
			if ([" ", "Enter"].indexOf(e.key) > -1) {
				e.preventDefault();
				togglePanel();
				Array.prototype.slice
					.call(instance.parentElement.parentElement.children)
					.filter((a) => a !== instance.parentElement)[0]
					.querySelector(
						`[aria-controls="${instance.getAttribute("aria-controls")}"]`
					)
					.focus();
			}
		});
	});
