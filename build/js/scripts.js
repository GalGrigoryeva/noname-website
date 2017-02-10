// Main navigation
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");


//Popup
var linkTable = document.querySelector(".price-list__link--table");
var linkAlone = document.querySelector(".price-list__item-link--alone");
var linkCouple = document.querySelector(".price-list__item-link--couple");

var popupTable = document.querySelector(".modal-content--prise-table");
var popupAlone = document.querySelector(".modal-content--prise-alone");
var popupCouple = document.querySelector(".modal-content--prise-couple");

var closeTable = popupTable.querySelector(".modal-content__btn-close");
var closeAlone = popupAlone.querySelector(".modal-content__btn-close");
var closeCouple = popupCouple.querySelector(".modal-content__btn-close");

var cancelTable = popupTable.querySelector(".modal-content__btn-exit");
var cancelAlone = popupAlone.querySelector(".modal-content__btn-exit");
var cancelCouple = popupCouple.querySelector(".modal-content__btn-exit");

var overlay = document.querySelector(".modal-overlay");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//Popup logic
linkTable.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popupTable.classList.add("modal-content-show");
});

linkAlone.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popupAlone.classList.add("modal-content-show");
});

linkCouple.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popupCouple.classList.add("modal-content-show");
});

//Closing logic
closeTable.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupTable.classList.remove("modal-content-show");
});

closeAlone.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupAlone.classList.remove("modal-content-show");
});

closeCouple.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupCouple.classList.remove("modal-content-show");
});

cancelTable.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupTable.classList.remove("modal-content-show");
});

cancelAlone.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupAlone.classList.remove("modal-content-show");
});

cancelCouple.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popupCouple.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupTable.classList.contains("modal-content-show")) {
      overlay.classList.remove("modal-overlay-show");
      popupTable.classList.remove("modal-content-show");
    } else if (popupAlone.classList.contains("modal-content-show")) {
      overlay.classList.remove("modal-overlay-show");
      popupAlone.classList.remove("modal-content-show");
    } else if (popupCouple.classList.contains("modal-content-show")) {
      overlay.classList.remove("modal-overlay-show");
      popupCouple.classList.remove("modal-content-show");
    }
  }
});

overlay.addEventListener("click", function(event) {
  if (popupTable.classList.contains("modal-content-show")) {
    overlay.classList.remove("modal-overlay-show");
    popupTable.classList.remove("modal-content-show");
  } else if (popupAlone.classList.contains("modal-content-show")) {
    overlay.classList.remove("modal-overlay-show");
    popupAlone.classList.remove("modal-content-show");
  } else if (popupCouple.classList.contains("modal-content-show")) {
    overlay.classList.remove("modal-overlay-show");
    popupCouple.classList.remove("modal-content-show");
  }
});
