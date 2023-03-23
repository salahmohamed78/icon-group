let btn = document.getElementById("menuBtn"),
  nav = document.getElementById("nav"),
  isExpanded = !1;
btn.addEventListener("click", function () {
  btn.classList.toggle("menuBtn--close"),
    isExpanded
      ? (nav.classList.toggle("nav--open"),
        setTimeout(function () {
          nav.style.display = "none";
        }, 800),
        (isExpanded = !1))
      : ((nav.style.display = "block"),
        setTimeout(function () {
          nav.classList.toggle("nav--open");
        }, 10),
        (isExpanded = !0));
});
let companiesBtn = document.getElementById("comBtn"),
  companiesList = document.getElementById("comList"),
  dropDownBtn = document.getElementById("dropDownBtn"),
  isDown = !1;
function setMenuHeight() {
  let e = document.getElementById("header").offsetHeight;
  document.querySelector(":root").style.setProperty("--menuHeight", `${e}px`);
}
companiesBtn.addEventListener("click", function () {
  dropDownBtn.classList.toggle("dropUp"),
    isDown
      ? (companiesList.classList.toggle("campanies__list--show"),
        setTimeout(function () {
          companiesList.style.display = "none";
        }, 800),
        (isDown = !1))
      : ((companiesList.style.display = "block"),
        setTimeout(function () {
          companiesList.classList.toggle("campanies__list--show");
        }, 1),
        (isDown = !0));
}),
  setMenuHeight(),
  window.addEventListener("DOMContentLoaded", setMenuHeight),
  window.addEventListener("resize", setMenuHeight);
let main = document.querySelector("main");
main.addEventListener("click", function () {
  isDown &&
    (dropDownBtn.classList.toggle("dropUp"),
    companiesList.classList.toggle("campanies__list--show"),
    setTimeout(function () {
      companiesList.style.display = "none";
    }, 800),
    (isDown = !1));
});

let menuBtns = document.querySelectorAll(".nav__btn");
let storeBtn = null;
for (let i = 0; i < menuBtns.length; i++) {
  if (menuBtns[i].innerHTML === "Store") {
    storeBtn = menuBtns[i];
    break;
  }
}

console.log(storeBtn);
storeBtn.setAttribute("href", "https://furnitureiconstore.com");
