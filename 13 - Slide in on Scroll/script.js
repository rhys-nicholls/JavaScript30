
/* 
    Debounce limits how often the provided function is called
    wait arg, is the the number of milliseconds between each call
*/

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide(event) {
    images.forEach(image => {
        // Halfway through image
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        // Bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        console.log(imageBottom);
        console.log(isHalfShown);
        console.log(isNotScrolledPast);
        if(isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));