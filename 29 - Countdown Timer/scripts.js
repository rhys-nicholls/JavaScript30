let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if seconds have reached 0
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // Display
    displayTimeLeft(secondsLeft);

  }, 1000);
}

function displayTimeLeft(seconds) {
  //const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const displayTime = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = displayTime;
  timerDisplay.textContent = displayTime;
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTimeDisplay.textContent =  `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}${hour > 12 ? 'pm' : 'am'}`;

}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const minutes = this.minutes.value;
  timer(minutes * 60);
  this.reset();
})