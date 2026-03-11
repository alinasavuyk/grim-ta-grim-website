export function initModal() {
    const ticketButtons = document.querySelectorAll('.open-modal-btn'); 
    if (ticketButtons.length === 0) return;

    function createTicketModal() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
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
                        <input type="tel" name="phone" 
                               placeholder="+380 (__) ___-__-__" 
                               pattern="[0-9]{10,12}" 
                               title="Введіть від 10 до 12 цифр" 
                               required>
                    </div>
                    <button type="submit" class="btn-submit">Замовити</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden'; 

        const closeModal = () => {
            overlay.classList.remove('is-visible');
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = '';
            }, 300);
        };

        setTimeout(() => overlay.classList.add('is-visible'), 10);

        overlay.querySelector('.modal-close-btn').onclick = closeModal;
        overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);

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

    ticketButtons.forEach(btn => btn.addEventListener('click', createTicketModal));
}
