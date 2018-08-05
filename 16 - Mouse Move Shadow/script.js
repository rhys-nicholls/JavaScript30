const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(event) {
  /*
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = event.offsetX;
  let y = event.offsetY;
  */

  // All the above can be writen like this using ES6 destructuring
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = event;
  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7)
    `;


}

hero.addEventListener('mousemove', shadow);