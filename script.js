const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  status.textContent = `Thanks, ${name}! Your message has been received.`;
  form.reset();

  console.log({ name, email, message });
});
