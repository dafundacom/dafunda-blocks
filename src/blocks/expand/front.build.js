"use strict";

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
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
  var children = Array.prototype.slice.call(element.parentNode.children).filter(function (child) {
    return child !== element;
  });
  return criteria ? children.filter(criteria) : children;
}

Array.prototype.slice.call(document.getElementsByClassName("expand-toggle-button")).forEach(function (instance) {
  if (instance.getAttribute("aria-controls") === "") {
    var blockID = instance.parentElement.parentElement.id.slice(10);
    instance.setAttribute("aria-controls", "expand-full-".concat(blockID));

    if (instance.parentElement.classList.contains("expand-full")) {
      instance.parentElement.setAttribute("id", "expand-full-".concat(blockID));
    }
  }

  var togglePanel = function togglePanel() {
    var blockRoot = instance.closest(".expand");
    blockRoot.querySelector(".expand-partial .expand-toggle-button").classList.toggle("hide");
    var expandingPart = Array.prototype.slice.call(blockRoot.children).filter(function (child) {
      return child.classList.contains("expand-full");
    })[0];
    expandingPart.classList.toggle("hide");

    if (!expandingPart.classList.contains("hide")) {
      Array.prototype.slice.call(document.getElementsByClassName("image_slider")).forEach(function (slider) {
        var swiper = new Swiper("#".concat(slider.id), JSON.parse(slider.dataset.swiperData));
      });
    }

    Array.prototype.slice.call(expandingPart.querySelectorAll(".wp-block-embed iframe")).forEach(function (embeddedContent) {
      embeddedContent.style.removeProperty("width");
      embeddedContent.style.removeProperty("height");
    });
  };

  instance.addEventListener("click", togglePanel);
  instance.addEventListener("keydown", function (e) {
    if ([" ", "Enter"].indexOf(e.key) > -1) {
      e.preventDefault();
      togglePanel();
      Array.prototype.slice.call(instance.parentElement.parentElement.children).filter(function (a) {
        return a !== instance.parentElement;
      })[0].querySelector("[aria-controls=\"".concat(instance.getAttribute("aria-controls"), "\"]")).focus();
    }
  });
});