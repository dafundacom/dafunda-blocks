"use strict";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    Array.prototype.slice.call(document.getElementsByClassName("progress-bar")).forEach(function (instance) {
      instance.classList.add("progress-bar-filled");
    });
  }, 500);
});