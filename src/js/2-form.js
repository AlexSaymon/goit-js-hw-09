export const formData = {
  email: '',
  message: '',
};

export const formRefs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector('input[type="email"]'),
  textarea: document.querySelector('textarea'),
};

const { form, input, textarea } = formRefs;

populateTextArea();

export function onFormInput(event) {
  localStorage.setItem('feedback-form-state', event.target.value);
}

export function onFormSubmit(event) {
  event.preventDefault();
  const email = input.value;
  const message = textarea.value;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  event.currentTarget.reset();
  localStorage.removeItem(`feedback-form-state`);
}

export function populateTextArea() {
  const messageText = localStorage.getItem('feedback-form-state');
  if (messageText) {
    form.message.value = messageText;
  }
}

form.message.addEventListener(`input`, onFormInput);
form.addEventListener(`submit`, onFormSubmit);
