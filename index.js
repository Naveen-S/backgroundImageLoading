// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

var load = 0;

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  text.innerHTML = `${load}%`;
  text.style.opacity = scale(load, 1, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 1, 100, 30, 0)}px)`;
};

const interval = setInterval(blurring, 30);
