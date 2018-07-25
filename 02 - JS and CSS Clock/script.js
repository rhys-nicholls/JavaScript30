const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Toggle class skip to stop hand jumping backwards on full 360deg
    if (seconds === 0 || seconds === 1) secondHand.classList.toggle('skip');
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    if (minutes === 0 || minutes === 1) minuteHand.classList.toggle('skip');


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (hours === 0 || hours === 1) hourHand.classList.toggle('skip');

}

setInterval(setDate, 1000);