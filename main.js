import { initMobileMenu } from './src/js/mobileMenu.js';
import { initModal } from './src/js/modal.js';
import { formHandler } from './src/js/form-handler.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModal();
    formHandler()
});