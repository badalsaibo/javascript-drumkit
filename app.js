function playSound(e) {
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!audio) return; //stops the function if audio == null.
 audio.currentTime = 0;
 audio.play();
 key.classList.add('playing');
}
function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);

window.onload = checkWidth;

function checkWidth() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("Oops! This thing is not mobile ready. Go grab your laptop.")
  }
}
