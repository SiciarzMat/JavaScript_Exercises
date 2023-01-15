const start = document.querySelectorAll('button')[0];
const stop = document.querySelectorAll('button')[1];
let colorChange = null;
getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

start.addEventListener('click', () => {
  start.disabled = true;
  colorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  start.disabled = false;
  clearInterval(colorChange);
});
