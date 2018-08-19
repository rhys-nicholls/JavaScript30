const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(event) {
  const y = event.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;

  video.playbackRate = playbackRate;
  updateBar(height, playbackRate);

}

function updateBar(height, playbackRate) {
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(1)}x`;
}

speed.addEventListener('mousemove', handleMove);