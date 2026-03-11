import { initMobileMenu } from './src/js/mobileMenu.js';
import { initModal } from './src/js/modal.js';

// Запускаємо логіку після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModal();
});