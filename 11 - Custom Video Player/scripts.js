/* Get Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');
const curTime = player.querySelector('.current__time');
const durTime = player.querySelector('.duration__time');

/* Build Functions */

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    this.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
}

function skip () {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // Original attempt
    /*
    if (this.name === 'volume'){
        video.volume = this.value;
    } else if (this.name === 'playbackRate') {
        video.playbackRate = this.value;
    }
    */

    // Simplified
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    updateTimes();
}

function convertTime(time) {
    let hours = Math.floor(time / 3600);
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);

    if (mins < 10){
        mins = `0${mins}`;
    }
    if (secs < 10) {
        secs = `0${secs}`;
    }

    return hours > 0 ? `${hours}:${mins}:${secs}` : `${mins}:${secs}`;
}

function updateTimes(){
    curTime.textContent = convertTime(video.currentTime);
    durTime.textContent = convertTime(video.duration);
}

function scrub(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function init() {
    progressBar.style.flexBasis = '0%';
    updateTimes();
}

/* Hook Up Event Listeners */
window.addEventListener('load', init);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false)

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));