'use strict';

var input = document.getElementById("myInput");
var maxLength = 50;

input.addEventListener("input", function() {
    if (input.value.length > maxLength) {
        input.value = input.value.substr(0, maxLength);
    }
});
