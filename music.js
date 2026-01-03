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
