import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      userDate = selectedDates[0].getTime();
    }
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const counter = () => {
  let timer = setInterval(() => {
    startBtn.disabled = true;
    let ms = userDate - Date.now();

    const date = convertMs(ms);
    secondsSpan.textContent = addLeadingZero(date.seconds);
    minutesSpan.textContent = addLeadingZero(date.minutes);
    hoursSpan.textContent = addLeadingZero(date.hours);
    daysSpan.textContent = addLeadingZero(date.days);

    if (ms <= 0) {
      clearInterval(timer);
      secondsSpan.textContent = '00';
      minutesSpan.textContent = '00';
      hoursSpan.textContent = '00';
      daysSpan.textContent = '00';
    }
  }, 1000);
};

startBtn.addEventListener('click', counter);
function addLeadingZero(val) {
  return String(val).padStart(2, '0');
}
