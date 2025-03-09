// Name
import {
  addDataTolocalStorage,
  getDataFromLocalStorage,
  clearDadaFromLocalStorage,
} from './localstorage-api.js';

import { LS_KEY_FEEDBACK_FORM } from './ls-keys.js';

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
