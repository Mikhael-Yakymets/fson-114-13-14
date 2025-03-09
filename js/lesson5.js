// Name
import {
  addDataTolocalStorage,
  getDataFromLocalStorage,
  clearDadaFromLocalStorage,
} from './localstorage-api.js';

import { LS_KEY_FEEDBACK_FORM } from './ls-keys.js';

import { convertMs } from './convertMs.js'

// Default
import refs from './refs.js';

refs.form.addEventListener('input', onInputClick);
refs.form.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', renderPage); // виклик функції при завантаженні сторінки

function onInputClick(event) {
  const { email, message } = event.currentTarget.elements;

  const userData = { email: email.value.trim(), message: message.value.trim() };
  addDataTolocalStorage(LS_KEY_FEEDBACK_FORM, userData);
}

function onSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;
  if (!email.value.trim() || !message.value.trim()) {
    return alert('Fill please all fields');
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });

  event.currentTarget.reset();
  clearDadaFromLocalStorage(LS_KEY_FEEDBACK_FORM);
}

function renderPage() {
  const lsData = getDataFromLocalStorage(LS_KEY_FEEDBACK_FORM);

  if (lsData) {
    refs.form.elements.email.value = lsData.email;
    refs.form.elements.message.value = lsData.message;
  }
}

// timer
refs.button.disabled = true;

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
    return alert("Please choose a date in the future")
    }
    refs.button.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

flatpickr(refs.input, options)

refs.button.addEventListener("click", onClick)

function onClick() {
  refs.button.disabled = true;
  refs.input.disabled = true;

  const timerId = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diff);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
  }, 1000);
  
}



/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */


const value = prompt("pass value");

function checkValue(value) {
  console.log("start loading");
  return new Promise((resolve, rejected) => {
    if (isNaN(value)) {
      return rejected("error");
    }
    if (value % 2 === 0) {
      setTimeout(() => {
        resolve("even");
      }, 1000)
    }
    if (value % 2 !== 0) {
      setTimeout(() => {
        resolve("odd");
      }, 2000)
    }
  })
}

checkValue(value)
  .then(response => {
  console.log(response, "then");
}).catch(error => {
  console.log(error, "catch");
})
  .finally(() => {
  console.log("end loading");
})



