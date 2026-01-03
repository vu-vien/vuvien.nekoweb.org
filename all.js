
	// time script
function showTime() {
    const timeNow = new Date().toLocaleTimeString("en-US");
    document.getElementById('clock').textContent = timeNow;
}

setInterval(showTime, 1000);
function showTime2() {
    const timeBK = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Bangkok"});
    document.getElementById('clock2').textContent = timeBK;
}

setInterval(showTime2, 1000);
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

// music player script
    const song =
    document.getElementById('song');

function press() {
if (document.getElementById("song").paused == true) {
    document.getElementById("song").play();
    document.getElementById("play-button").innerHTML =
      "❚❚";
  } else if (document.getElementById("song").paused == false) {
   document.getElementById("song").pause();
   document.getElementById("play-button").innerHTML =
      "▶";
  }
}
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

// refresh vid
function refreshIframe() {
    var ifr = document.getElementsByName('video')[0];
    ifr.src = ifr.src;
}

// tabs scripts
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// modal dialog scripts
const dialog = document.getElementById("dialog"); 

function show() { 
  dialog.showModal(); 
}
const dialog1 = document.getElementById("dialog1"); 

function show1() { 
  dialog1.showModal(); 
}
const dialog11 = document.getElementById("dialog11"); 

function show11() { 
  dialog11.showModal(); 
}
const dialog2 = document.getElementById("dialog2"); 

function show2() { 
  dialog2.showModal(); 
}
const dialog21 = document.getElementById("dialog21"); 

function show21() { 
  dialog21.showModal(); 
}
const dialog22 = document.getElementById("dialog22"); 

function show22() { 
  dialog22.showModal(); 
}
const dialog23 = document.getElementById("dialog23"); 

function show23() { 
  dialog23.showModal(); 
}
const dialog24 = document.getElementById("dialog24"); 

function show24() { 
  dialog24.showModal(); 
}
const dialog25 = document.getElementById("dialog25"); 

function show25() { 
  dialog25.showModal(); 
}
const dialog26 = document.getElementById("dialog26"); 

function show26() { 
  dialog26.showModal(); 
}


