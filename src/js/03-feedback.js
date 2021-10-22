import { throttle } from 'throttle-debounce';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  coment: document.querySelector('textarea'),
};
const FORM_KEY = 'feedback-form-state';
const formData = {};
localStorage.setItem(FORM_KEY, JSON.stringify(formData));

refs.form.addEventListener('input', throttle(500, onFormInput));

refs.form.addEventListener('submit', onSubmitForm);
popularInput();

function onSubmitForm(e) {
  e.preventDefault();
  console.log(`email : ${JSON.parse(localStorage.getItem(FORM_KEY)).email}`);
  console.log(`message : ${JSON.parse(localStorage.getItem(FORM_KEY)).message}`);

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
  if (parsedFormKey.message) {
    refs.coment.value = parsedFormKey.message;
  }
  if (parsedFormKey.email) {
    refs.email.value = parsedFormKey.email;
  }
}
