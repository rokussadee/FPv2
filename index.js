"use strict";

(function () {
  window.scrollTo(0, 0);

  document.querySelectorAll(".contactpage").forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      // de twee niet geselecteerde contactpages aanroepen en bluren
      document.querySelectorAll(".contactpage").forEach((elem) => {
        elem.style.webkitFilter = "blur(20px)";
      });
      element.style.webkitFilter = "blur(0px)";
    });
    element.addEventListener("mouseleave", (e) => {
      document.querySelectorAll(".contactpage").forEach((elem) => {
        elem.style.webkitFilter = "blur(0px)";
      });
    });
  });
})();
