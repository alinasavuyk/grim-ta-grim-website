export function initModal (){
const ticketButtons = document.querySelectorAll('.open-modal-btn');
 function createTicketModal() {
    // Створюємо оверлей (фон)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Створюємо саме вікно
    overlay.innerHTML = `
        <div class="modal-window">
            <button class="modal-close-btn" aria-label="Закрити">&times;</button>
            <h2 class="modal-title">Забронювати квиток</h2>
            <p class="modal-text">Залиште ваші контакти, і ми зв'яжемося з вами для підтвердження замовлення.</p>
            
            <form id="modal-form" class="modal-form">
                <div class="modal-field">
                    <input type="text" name="name" placeholder="Ваше ім'я" required minlength="2">
                </div>
                <div class="modal-field">
                    <input type="tel" name="phone" placeholder="+380 (__) ___-__-__" required>
                </div>
                <button type="submit" class="btn-submit">Замовити</button>
            </form>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Забороняємо скрол сторінки під модалкою

    // Функція закриття
    const closeModal = () => {
        overlay.classList.remove('is-visible');
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = '';
        }, 300);
    };

    // Анімація появи
    setTimeout(() => overlay.classList.add('is-visible'), 10);

    // Обробники подій
    overlay.querySelector('.modal-close-btn').onclick = closeModal;
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

    // Обробка форми всередині модалки (GET-запит)
    const form = overlay.querySelector('#modal-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const searchParams = new URLSearchParams(data).toString();
        
        console.log('GET запит відправлено:', `https://api.grim-and-thunder.com/tickets?${searchParams}`);
        
        alert(`Дякуємо! Ми зателефонуємо вам найближчим часом.`);
        closeModal();
    };
}

// Підключаємо функцію до всіх кнопок
ticketButtons.forEach(btn => btn.addEventListener('click', createTicketModal));
}
