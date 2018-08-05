function removeTransition(event) {
  if (event.propertyName !== 'transform') return; //skip if not a transform
  this.classList.remove('playing');
}

function playSound(element) {
  const audio = document.querySelector(`audio[data-key="${element.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${element.keyCode}"]`);

  if (!audio) return; // Stop function from running
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
