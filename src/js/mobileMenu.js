export function initMobileMenu() {
   const openBtn = document.getElementById('open-menu');

// Дані для меню (зручно редагувати в одному місці)
const menuLinks = [
    { text: 'Про гурт', href: '#about' },
    { text: 'Концерти', href: '#concerts' },
    { text: 'Галерея', href: '#gallery' },
    { text: 'Контакти', href: '#contacts' }
];

 function createMobileMenu() {
    // 1. Створюємо основний контейнер (overlay)
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.id = 'dynamic-menu';

    // 2. Створюємо кнопку закриття
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'menu-close-btn';
    
    // 3. Створюємо список посилань
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'mobile-nav-list';

    menuLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.href;
        a.className = 'mobile-link';
        
        // Закриваємо меню при кліку на посилання
        a.onclick = removeMenu;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Збираємо все докупи
    nav.appendChild(ul);
    overlay.appendChild(closeBtn);
    overlay.appendChild(nav);
    document.body.appendChild(overlay);

    // Блокуємо скрол
    document.body.style.overflow = 'hidden';

    // Додаємо анімацію появи (через невелику затримку)
    setTimeout(() => overlay.classList.add('active'), 10);

    // Обробник для кнопки закриття
    closeBtn.onclick = removeMenu;
}

function removeMenu() {
    const menu = document.getElementById('dynamic-menu');
    if (menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Видаляємо з DOM після завершення анімації
        setTimeout(() => menu.remove(), 400);
    }
}

openBtn.addEventListener('click', createMobileMenu);
    console.log("Menu initialized");
}
