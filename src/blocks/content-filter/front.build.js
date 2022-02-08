"use strict";

if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);

		return null;
	};
}

function dbe_getSiblings(element, criteria) {
	var children = Array.prototype.slice
		.call(element.parentNode.children)
		.filter(function (child) {
			return child !== element;
		});
	return criteria ? children.filter(criteria) : children;
}

Array.prototype.slice
	.call(document.getElementsByClassName("dbe-content-filter-tag"))
	.forEach(function (instance) {
		var blockProper = instance.closest(".wp-block-dbe-content-filter");
		var initialSelection = blockProper.getAttribute("data-currentselection");
		instance.addEventListener("click", function () {
			var _this = this;

			var isOldVersion = this.getAttribute("data-activecolor");
			this.setAttribute(
				"data-tagisselected",
				JSON.stringify(!JSON.parse(this.getAttribute("data-tagisselected")))
			);

			if (isOldVersion) {
				this.style.backgroundColor = this.getAttribute("data-activecolor");
				this.style.color = this.getAttribute("data-activetextcolor");
			} else {
				this.classList.toggle("dbe-selected");
			}

			var categoryIndex = JSON.parse(this.getAttribute("data-categorynumber"));
			var filterIndex = JSON.parse(this.getAttribute("data-filternumber"));

			if (JSON.parse(this.getAttribute("data-tagisselected"))) {
				if (
					!JSON.parse(this.parentElement.getAttribute("data-canusemultiple"))
				) {
					dbe_getSiblings(this, function (elem) {
						return elem.classList.contains("dbe-content-filter-tag");
					}).forEach(function (sibling) {
						sibling.setAttribute("data-tagisselected", "false");

						if (isOldVersion) {
							sibling.style.backgroundColor =
								_this.getAttribute("data-normalcolor");
							sibling.style.color = _this.getAttribute("data-normaltextcolor");
						} else {
							sibling.classList.remove("dbe-selected");
						}
					});
				}
			} else {
				if (isOldVersion) {
					this.style.backgroundColor = this.getAttribute("data-normalcolor");
					this.style.color = this.getAttribute("data-normaltextcolor");
				} else {
					this.classList.remove("dbe-selected");
				}
			}

			var newSelection = JSON.parse(
				blockProper.getAttribute("data-currentselection")
			);

			if (Array.isArray(newSelection[categoryIndex])) {
				newSelection[categoryIndex][filterIndex] = JSON.parse(
					this.getAttribute("data-tagisselected")
				);
			} else {
				newSelection[categoryIndex] = JSON.parse(
					this.getAttribute("data-tagisselected")
				)
					? filterIndex
					: -1;
			}

			blockProper.setAttribute(
				"data-currentselection",
				JSON.stringify(newSelection)
			);
			var matchingOption = blockProper.getAttribute("data-matchingoption");
			Array.prototype.slice
				.call(
					blockProper.querySelectorAll(":scope > .dbe-content-filter-panel")
				)
				.forEach(function (instance) {
					var panelData = JSON.parse(
						instance.getAttribute("data-selectedfilters")
					);
					var mainData = JSON.parse(
						blockProper.getAttribute("data-currentselection")
					);
					var hasMatchedAll = true;

					if (
						initialSelection ==
							blockProper.getAttribute("data-currentselection") &&
						JSON.parse(blockProper.getAttribute("data-initiallyshowall")) ===
							false
					) {
						hasMatchedAll = false;
					} else {
						panelData.forEach(function (category, i) {
							if (Array.isArray(category)) {
								if (
									(category.every(function (f) {
										return !f;
									}) &&
										mainData[i].some(function (f) {
											return f;
										})) || //panel has no tag from category and maindata has at least one tag selected -> consider as mismatch
									(mainData[i].filter(function (f) {
										return f;
									}).length > 0 &&
										!category.some(function (f, j) {
											return f && f === mainData[i][j];
										}))
								) {
									hasMatchedAll = false;
								}
							} else if (mainData[i] !== category && mainData[i] !== -1) {
								hasMatchedAll = false;
							}
						});
					} //alternate setting

					var hasMatchedOne = false;

					if (
						initialSelection ===
							blockProper.getAttribute("data-currentselection") &&
						JSON.parse(blockProper.getAttribute("data-initiallyshowall")) ===
							true
					) {
						hasMatchedOne = true;
					} else {
						panelData.forEach(function (category, i) {
							if (Array.isArray(category)) {
								if (
									mainData[i].filter(function (f) {
										return f;
									}).length > 0 &&
									category.filter(function (f, j) {
										return f && f === mainData[i][j];
									}).length > 0
								) {
									hasMatchedOne = true;
								}
							} else if (mainData[i] === category && mainData[i] !== -1) {
								hasMatchedOne = true;
							}
						});
					}

					var isVisible =
						matchingOption === "matchAll" ? hasMatchedAll : hasMatchedOne;

					if (isOldVersion) {
						instance.style.display = isVisible ? "block" : "none";
					} else if (isVisible) {
						instance.classList.remove("dbe-hide");
						Array.prototype.slice
							.call(document.getElementsByClassName("dbe_image_slider"))
							.forEach(function (slider) {
								var swiper = new Swiper(
									"#".concat(slider.id),
									JSON.parse(slider.dataset.swiperData)
								);
							});
					} else {
						instance.classList.add("dbe-hide");
					}

					Array.prototype.slice
						.call(instance.querySelectorAll(".wp-block-embed iframe"))
						.forEach(function (embeddedContent) {
							embeddedContent.style.removeProperty("width");
							embeddedContent.style.removeProperty("height");
						});
				});
		});
	});
/*Array.from(document.getElementsByClassName('dbe-content-filter-reset')).forEach(
	instance => {
		instance.addEventListener('click', function() {
			const blockProper = this.closest('.wp-block-dbe-content-filter');

			let blockSelection = JSON.parse(
				blockProper.getAttribute('data-currentselection')
			);

			blockSelection = blockSelection.map(c =>
				Array.isArray(c) ? Array(c.length).fill(false) : -1
			);

			blockProper.setAttribute(
				'data-currentselection',
				JSON.stringify(blockSelection)
			);

			Array.from(
				blockProper.getElementsByClassName('dbe-content-filter-panel')
			).forEach(instance => {
				instance.style.display = 'block';
			});

			Array.from(
				blockProper.getElementsByClassName('dbe-content-filter-tag')
			).forEach(instance => {
				instance.setAttribute('data-tagisselected', 'false');
				instance.style.backgroundColor = instance.getAttribute(
					'data-normalcolor'
				);
				instance.style.color = instance.getAttribute(
					'data-normaltextcolor'
				);
			});
		});
	}
);*/
