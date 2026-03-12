export function initMobileMenu() {
const openBtn = document.getElementById('open-menu');

const menuLinks = [
    { text: 'Про гурт', href: '#about' },
    { text: 'Концерти', href: '#concerts' },
    { text: 'Галерея', href: '#gallery' },
    { text: 'Контакти', href: '#contacts' }
];

 function createMobileMenu() {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.id = 'dynamic-menu';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'menu-close-btn';
    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'mobile-nav-list';

    menuLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.href;
        a.className = 'mobile-link';
        
        a.onclick = removeMenu;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    overlay.appendChild(closeBtn);
    overlay.appendChild(nav);
    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';

    setTimeout(() => overlay.classList.add('active'), 1000);

    closeBtn.onclick = removeMenu;
}

function removeMenu() {
    const menu = document.getElementById('dynamic-menu');
    if (menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
   
        setTimeout(() => menu.remove(), 2000);
    }
}

openBtn.addEventListener('click', createMobileMenu);
    console.log("Menu initialized");
}
