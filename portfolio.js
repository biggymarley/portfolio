var all = document.getElementById("all").style;
var pos = document.getElementById("ball").style;
window.onload = getcookie();
function setcookie(filter) {
  document.cookie = "value=" + filter;
}
function getcookie() {
  var value = document.cookie.split("=");
  if (value[1] === "") {
    pos.setProperty("left", "0",);
    pos.setProperty("background-image", "url(./img/sun.png)",);
    all.filter = "";
    setcookie(all.filter);
  } else if (value[1] === "invert(1) hue-rotate(180deg)") {
    pos.setProperty("left", "55px");
    pos.setProperty("background-image", "url(./img/moon.png)",);
    all.filter = "invert(1) hue-rotate(180deg)";
    setcookie(all.filter);
  }
}
function darkmode() {
  if (all.filter === "") {
    pos.setProperty("left", "55px");
    pos.setProperty("background-image", "url(./img/moon.png)",);
    all.filter = "invert(1) hue-rotate(180deg)";
    setcookie(all.filter);
  } else if (all.filter === "invert(1) hue-rotate(180deg)") {
    pos.setProperty("left", "0");
    pos.setProperty("background-image", "url(./img/sun.png)",);
    all.filter = "";
    setcookie(all.filter);
  }
}