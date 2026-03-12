export function formHandler(){
const contactForm = document.getElementById('contact-form');
if (!contactForm) return;
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name.length < 2) {
    alert("Будь ласка, введіть коректне ім'я (мінімум 2 символи)");
    return;
  }
  const emailRoute = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRoute.test(email)) {
    alert("Будь ласка, введіть коректну електронну адресу");
    return;
  }
  const formData = {
    name: name,
    email: email,
    message: message,
    source: 'lotoplay_test' 
  };

  const searchParams = new URLSearchParams(formData).toString();
const targetUrl = `https://jsonplaceholder.typicode.com/posts?${searchParams}`;

  /* "Відправка" (Fetch)*/
  console.log('Виконується GET запит на:', targetUrl);

  fetch(targetUrl, { method: 'GET' })
    .then(() => {
      alert(`Дякуємо, ${name}! Ваше повідомлення успішно імітовано та "відправлено" через GET запит.`);
      contactForm.reset();
    })
    .catch(() => {
      alert(`Дякуємо! Форма валідована, GET-запит сформовано.`);
      contactForm.reset();
    });
});
}
