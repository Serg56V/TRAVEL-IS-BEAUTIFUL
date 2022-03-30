function onoff(obj) {
    "use strict";
    if (obj === "on") {
        document.getElementById("cover").style.display = "block";
        document.getElementById("contact_form").style.display = "block";
    }
    if (obj === "off") {
        document.getElementById("cover").style.display = "none";
        document.getElementById("contact_form").style.display = "none";
    }
}