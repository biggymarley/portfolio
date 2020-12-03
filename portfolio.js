var all = document.getElementById("all").style;
var pos = document.getElementById("ball").style;
var dmodevalue = document.getElementById("dmodevalue").style;
var content = document.getElementById("dmodevalue");
window.onload = getcookie();
// window.onload = setvalue();
function setcookie(filter) {
  document.cookie = "value=" + filter;
}
function setvalue(filter)
{
  if(filter === "")
  {
    content.innerHTML = "ON";
    dmodevalue.setProperty("left", "43px");
  }
  else if(filter === "invert(1) hue-rotate(180deg)")
  {
    content.innerHTML = "OFF";
  }
}
function getcookie() {
  var value = document.cookie.split("=");
  if (value[1] === "") {
    pos.setProperty("left", "0",);
    pos.setProperty("background-image", "url(./img/sun.png)",);
    all.filter = "";
    setvalue(all.filter);
    setcookie(all.filter);
  } else if (value[1] === "invert(1) hue-rotate(180deg)") {
    pos.setProperty("left", "55px");
    pos.setProperty("background-image", "url(./img/moon.png)",);
    all.filter = "invert(1) hue-rotate(180deg)";
    setvalue(all.filter);
    setcookie(all.filter);
  }
}
function darkmode() {
  if (all.filter === "") {
    pos.setProperty("left", "55px");
    pos.setProperty("background-image", "url(./img/moon.png)",);
    dmodevalue.setProperty("left", "0");
    all.filter = "invert(1) hue-rotate(180deg)";
    setvalue(all.filter);
    setcookie(all.filter);
  } else if (all.filter === "invert(1) hue-rotate(180deg)") {
    pos.setProperty("left", "0");
    dmodevalue.setProperty("left", "43px");
    pos.setProperty("background-image", "url(./img/sun.png)",);
    all.filter = "";
    setvalue(all.filter);
    setcookie(all.filter);
  }
}