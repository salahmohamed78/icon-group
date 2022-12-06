/*
                                                                         بسم الله الرحمن الرحيم                                                                    
Created by: SALAH MOHAMED

*/

/*functions */

let btn = document.getElementById("menuBtn");
let nav = document.getElementById("nav");
let isExpanded = false;

btn.addEventListener("click", function () {
  btn.classList.toggle("menuBtn--close");
  if (isExpanded) {
    nav.classList.toggle("nav--open");
    setTimeout(function () {
      nav.style.display = "none";
    }, 800);
    isExpanded = false;
  } else {
    nav.style.display = "block";
    setTimeout(function () {
      nav.classList.toggle("nav--open");
    }, 10);
    isExpanded = true;
  }
});

//           companies

let companiesBtn = document.getElementById("comBtn");
let companiesList = document.getElementById("comList");
let dropDownBtn = document.getElementById("dropDownBtn");
let isDown = false;

companiesBtn.addEventListener("click", function () {
  dropDownBtn.classList.toggle("dropUp");
  if (isDown) {
    companiesList.classList.toggle("campanies__list--show");

    setTimeout(function () {
      companiesList.style.display = "none";
    }, 800);
    isDown = false;
  } else {
    companiesList.style.display = "block";
    setTimeout(function () {
      companiesList.classList.toggle("campanies__list--show");
    }, 1);
    isDown = true;
  }
});

function setMenuHeight() {
  let menuHeight = document.getElementById("header").offsetHeight;

  document
    .querySelector(":root")
    .style.setProperty("--menuHeight", `${menuHeight}px`);
}
setMenuHeight();

window.addEventListener("DOMContentLoaded", setMenuHeight);
window.addEventListener("resize", setMenuHeight);

let main = document.querySelector("main");

main.addEventListener("click", function () {
  if (isDown) {
    dropDownBtn.classList.toggle("dropUp");
    companiesList.classList.toggle("campanies__list--show");

    setTimeout(function () {
      companiesList.style.display = "none";
    }, 800);
    isDown = false;
  }
});
