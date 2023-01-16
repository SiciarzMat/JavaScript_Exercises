const startBtn = document.querySelectorAll('button')[0];
const stopBtn = document.querySelectorAll('button')[1];
let colorChange = null;
getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', () => {
  start.disabled = true;
  colorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  start.disabled = false;
  clearInterval(colorChange);
});
