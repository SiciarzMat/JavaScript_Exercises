import Notiflix from 'notiflix';

const initDelay = document.querySelector('input[name="delay"]');
const initStep = document.querySelector('input[name="step"]');
const initAmount = document.querySelector('input[name="amount"]');
const submit = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const creator = e => {
  e.preventDefault();

  let delayValue = Number(initDelay.value);
  let stepValue = Number(initStep.value);
  let amountValue = Number(initAmount.value);

  for (let i = 0; i < amountValue; i++) {
    createPromise(i + 1, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
};
submit.addEventListener('submit', creator);
