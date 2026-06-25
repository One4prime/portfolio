// Navbar and theme behavior
const navLinks = document.querySelectorAll('#nav-links a');
const navMenu = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
}

menuToggle?.addEventListener('click', toggleMenu);

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`#nav-links a[href='#${id}']`);
            if (link) {
                link.classList.toggle('active', entry.isIntersecting);
            }
        });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0.2 }
);

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

function updateTheme(mode) {
    document.documentElement.dataset.theme = mode;
    themeToggle.innerText = mode === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('portfolioTheme', mode);
}

function initTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    updateTheme(theme);
}

themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'dark';
    updateTheme(current === 'dark' ? 'light' : 'dark');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            toggleMenu();
        }
    });
});

initTheme();
