var toggle = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");
var header = document.querySelector(".page-header__logo");
var cross = document.querySelector(".page-header__icon--cross");
var burger = document.querySelector(".page-header__icon--burger");
var download = document.querySelector(".download");

toggle.addEventListener("click", function (evt) {
  menu.classList.toggle("main-nav--closed");
  header.classList.toggle("page-header__logo--closed");
  burger.classList.toggle("page-header__icon--show");
  cross.classList.toggle("page-header__icon--show");
  download.classList.toggle("download--padding");
  });
