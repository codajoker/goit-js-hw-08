import { throttle } from 'throttle-debounce';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  coment: document.querySelector('textarea'),
};
const FORM_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onSubmitForm);

refs.form.addEventListener('input', throttle(500, onFormInput));
popularInput();

function onSubmitForm(e) {
  e.preventDefault();
  if (JSON.parse(localStorage.getItem(FORM_KEY)) !== null) {
    console.log(`email : ${JSON.parse(localStorage.getItem(FORM_KEY)).email}`);
    console.log(`message : ${JSON.parse(localStorage.getItem(FORM_KEY)).message}`);
  }

  e.target.reset();
  localStorage.removeItem(FORM_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}
function popularInput() {
  const savedFormKey = localStorage.getItem(FORM_KEY);
  const parsedFormKey = JSON.parse(savedFormKey);
  if (parsedFormKey === null) return;
  if (parsedFormKey.message) {
    refs.coment.value = parsedFormKey.message;
  }
  if (parsedFormKey.email) {
    refs.email.value = parsedFormKey.email;
  }
}
