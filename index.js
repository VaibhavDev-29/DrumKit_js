function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function playsound(e) {
  // Keyboard event
  playSoundByKeyCode(e.keyCode);
}

function handleClickOrTouch(e) {
  // Get data-key attribute of clicked element
  const keyElement = e.target.closest(".key");
  if (!keyElement) return; // if not clicked on a key

  const keyCode = keyElement.getAttribute("data-key")
  playSoundByKeyCode(keyCode);
}





// setTimeout(() => {
//     key.classList.remove('playing');
//   }, 100);

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);

  // Add click & touch support
  key.addEventListener("click", handleClickOrTouch);
  key.addEventListener("touchstart", handleClickOrTouch);
});
window.addEventListener("keydown", playsound);




