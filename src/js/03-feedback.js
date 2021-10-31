import { throttle } from 'throttle-debounce';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  coment: document.querySelector('textarea'),
};
const FORM_KEY = 'feedback-form-state';
const formObject = {
  email: '',
  message: '',
};
refs.form.addEventListener('submit', handleSubmit);
refs.form.addEventListener('input', throttle(500, handleInputChange));
function handleSubmit(e) {
  e.preventDefault();
  console.log(`email: ${e.target.elements.email.value}`);
  console.log(`message: ${e.target.elements.message.value}`);

  e.target.reset();

  localStorage.removeItem(FORM_KEY);
}
function handleInputChange(e) {
  formObject[e.target.name] = e.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(formObject));
}
window.addEventListener('DOMContentLoaded', initForm);
function initForm() {
  const formFields = JSON.parse(localStorage.getItem(FORM_KEY));
  if (formFields) {
    formObject.email = formFields.email;
    formObject.message = formFields.message;
    refs.email.value = formFields.email;
    refs.coment.value = formFields.message;
  }
}
// const formData = {};
// initForm();

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   const formData = new FormData(refs.form);
//   formData.forEach((email, message) => console.log(email, message));
//   e.target.reset();
//   localStorage.removeItem(FORM_KEY);
// });
// refs.form.addEventListener(
//   'input',
//   throttle(500, e => {
//     let persistedFilters = localStorage.getItem(FORM_KEY);
//     persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//     persistedFilters[e.target.name] = e.target.value;
//     localStorage.setItem(FORM_KEY, JSON.stringify(persistedFilters));
//   }),
// );

// function initForm() {
//   let persistedFilters = localStorage.getItem(FORM_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       refs.form.elements[name].value = value;
//     });
//   }
// }
// refs.form.addEventListener('input', throttle(500, onFormChange));
// popularInput();

// function onSubmitForm(e) {
//   e.preventDefault();
//   if (JSON.parse(localStorage.getItem(FORM_KEY)) !== null) {
//     console.log(`email : ${JSON.parse(localStorage.getItem(FORM_KEY)).email}`);
//     console.log(`message : ${JSON.parse(localStorage.getItem(FORM_KEY)).message}`);
//   }

//   e.target.reset();
//   localStorage.removeItem(FORM_KEY);
// }

// function onFormChange(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(FORM_KEY, JSON.stringify(formData));
// }

// function popularInput() {
//   const savedFormKey = localStorage.getItem(FORM_KEY);
//   const parsedFormKey = JSON.parse(savedFormKey);
//   if (parsedFormKey === null) return;
//   if (parsedFormKey.message) {
//     refs.coment.value = parsedFormKey.message;
//   }
//   if (parsedFormKey.email) {
//     refs.email.value = parsedFormKey.email;
//   }
// }
