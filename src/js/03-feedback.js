import { throttle } from 'throttle-debounce';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  coment: document.querySelector('textarea'),
};
const FORM_KEY = 'feedback-form-state';
// const formData = {};
initForm();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(refs.form);
  formData.forEach((email, message) => console.log(email, message));
  e.target.reset();
  localStorage.removeItem(FORM_KEY);
});
refs.form.addEventListener(
  'input',
  throttle(500, e => {
    let persistedFilters = localStorage.getItem(FORM_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[e.target.name] = e.target.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(persistedFilters));
  }),
);

function initForm() {
  let persistedFilters = localStorage.getItem(FORM_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
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
