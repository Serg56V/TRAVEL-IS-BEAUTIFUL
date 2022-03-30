/*function onoff_m(obj) {
    "use strict";
    var nav_disp = document.querySelector("nav");
    if (obj === "on") {
        document.getElementById("cover").style.display = "block";
        nav_disp.style.display = "flex";
    }
    if (obj === "off") {
        if (nav_disp.style.display === "flex") {
            document.getElementById("cover").style.display = "none";
            nav_disp.style.display = "none";
        }
    }
}*/
window.onload = function () {
    var humb = document.querySelector("div.hamburger");
    var cover = document.getElementById("cover");
    var contact_form = document.getElementById("contact_form");
    var close = document.getElementById("close");
    var nav = document.querySelector("nav");
    var button = document.querySelector("button");
    humb.onclick = function () {
        cover.style.display = "block";
        nav.style.display = "flex";
    }
    button.onclick = function () {
        cover.style.display = "block";
        contact_form.style.display = "block";
    }
    close.onclick = function () {
        cover.style.display = "none";
        contact_form.style.display = "none";
    }
    cover.onclick = function () {
        cover.style.display = "none";
        if (nav.style.display === "flex") nav.style.display = "none";
        if (contact_form.style.display === "block") contact_form.style.display = "none";
    }
}