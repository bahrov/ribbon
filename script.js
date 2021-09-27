"use strict";

const Ribbon = {

  _hideShow = function(element, func) {
    if (func === false) {
      document
        .getElementById(element)
        // .classList.add("fade-out")
        .classList.add("hidden");
      // .classList.remove("fade-out");
    } else {
      document.getElementById(element).classList.remove("hidden");
    }
  },

  _disablEnable = function (element, func) {
    return (document.getElementById(element).disabled = func);
  },

  // To hide button
  hideEl = function (element) {
    this._hideShow(element, false);
  },

  // To show hidden button
  showEl = function (element) {
    this._hideShow(element, true);
  },

  // To hide section
  hideSection = function (element) {
    this._hideShow(element, false);
  },

  // To show hidden section
  showSection = function (element) {
    this._hideShow(element, true);
  },

  // To disable button
  disableBtn = function (element) {
    this._disablEnable(element, true);
  },

  // To enable button
  enableBtn = function (element) {
    this._disablEnable(element, false);
  },
}

window.onload = function () {
  const buttons = document.getElementsByClassName("btn");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", (e) => console.log(e.target.id));
  }
};
