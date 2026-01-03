// blinking element script

var blink_speed = 500; // every 1000 == 1 second yes!
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingText');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingText2');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
