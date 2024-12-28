let yellow = document.querySelectorAll("[id]");
yellow.forEach((Element) => {
  Element.style.background = "yellow";
});

let alertClass = document.querySelectorAll(".alert");
alertClass.forEach((element) => {
  element.style.border = "1px solid gray";
});

let alertStopClass = document.querySelectorAll(".alert.stop");
alertStopClass.forEach((element) => {
  element.style.background = "red";
});

let alertGoClass = document.querySelectorAll(".alert.go");
alertGoClass.forEach((element) => {
  element.style.background = "green";
});
