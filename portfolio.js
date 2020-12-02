var all = document.getElementById("all").style;
var but = document.getElementById("toggle");
var pos = document.getElementById("ball").style;
console.log(pos);
window.onload = getcookie();
function setcookie(filter) {
  document.cookie = "value=" + filter;
}
function getcookie() {
  var value = document.cookie.split("=");
  if (value[1] === "") {
    but.setAttribute("value", "Dark");
    pos.setProperty("left", "0");
    all.filter = "";
    setcookie(all.filter);
  } else if (value[1] === "invert(1) hue-rotate(180deg)") {
    but.setAttribute("value", "Light");
    pos.setProperty("left", "55px");
    all.filter = "invert(1) hue-rotate(180deg)";
    setcookie(all.filter);
  }
}
function darkmode() {
  if (all.filter === "") {
    but.setAttribute("value", "Light");
    pos.setProperty("left", "55px");
    all.filter = "invert(1) hue-rotate(180deg)";
    setcookie(all.filter);
  } else if (all.filter === "invert(1) hue-rotate(180deg)") {
    but.setAttribute("value", "Dark");
    pos.setProperty("left", "0");
    all.filter = "";
    setcookie(all.filter);
  }
}
