const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const service = String(formData.get('service') || '').trim();

    status.textContent = name
      ? `Obrigado, ${name}. Recebemos o seu pedido para ${service || 'o seu projeto'}.`
      : 'Obrigado. Recebemos o seu pedido.';

    form.reset();
  });
}
