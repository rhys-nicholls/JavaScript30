const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const btn = document.querySelector('.btn');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err => console.log(err));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess with them
    //pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    // Put pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // Play sound
  snap.currentTime = 0;
  snap.play();
  // Take data from canvas
  const data = canvas.toDataURL('image/jpeg');
  //console.log(data);
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i] += 100; // Red
    pixels.data[i + 1] -= 50; // Green
    pixels.data[i + 2] *= 0.5; //Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i];
    pixels.data[i + 100] = pixels.data[i + 1];
    pixels.data[i - 150] = pixels.data[i + 2];    
  }
  return pixels;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);
btn.addEventListener('click', takePhoto);

