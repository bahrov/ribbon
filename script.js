"use strict";

const hideShow = function (element, func) {
  if (func === false) {
    document
      .getElementById(element)
      // .classList.add("fade-out")
      .classList.add("hidden");
    // .classList.remove("fade-out");
  } else {
    document.getElementById(element).classList.remove("hidden");
  }
};

const disablEnable = function (element, func) {
  return (document.getElementById(element).disabled = func);
};

// To hide button
const hideEl = function (element) {
  hideShow(element, false);
};

// To show hidden button
const showEl = function (element) {
  hideShow(element, true);
};

// To hide section
const hideSection = function (element) {
  hideShow(element, false);
};
// To show hidden section
const showSection = function (element) {
  hideShow(element, true);
};
// To disable button
const disableBtn = function (element) {
  disablEnable(element, true);
};
// To enable button
const enableBtn = function (element) {
  disablEnable(element, false);
};

window.onload = function () {
  const buttons = document.getElementsByClassName("btn");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", (e) => console.log(e.target.id));
  }
};
