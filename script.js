"use strict";

const hideShow = function (element, func) {
  return (document.getElementById(element).style.visibility =
    func === true ? "visible" : "hidden");
};

const disablEnable = function (element, func) {
  return (document.getElementById(element).disabled =
    func === true ? "true" : "false");
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

function getID(btn) {
  console.log(btn.id);
}
