
document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.getElementById('theme-toggle');

    
    const langEnBtn = document.getElementById('lang-en');
    const langTrBtn = document.getElementById('lang-tr');

   
    const modal = document.getElementById("profile-modal");
    const modalImg = document.getElementById("modal-img");
    const profilePic = document.querySelector(".profile-pic");
    const closeModal = document.querySelector(".close");

    
    let currentTheme = localStorage.getItem('theme') || 'light';
    let currentLang = localStorage.getItem('lang') || 'en';

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark-mode');
            themeToggleBtn.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    }

    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            if (lang === 'en') {
                el.textContent = el.getAttribute('data-en');
            } else {
                el.textContent = el.getAttribute('data-tr');
            }
        });

        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langTrBtn.classList.remove('active');
        } else {
            langEnBtn.classList.remove('active');
            langTrBtn.classList.add('active');
        }

        localStorage.setItem('lang', lang);
    }

    applyTheme(currentTheme);
    applyLanguage(currentLang);

   
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

   
    langEnBtn.addEventListener('click', () => {
        currentLang = 'en';
        applyLanguage(currentLang);
    });

    langTrBtn.addEventListener('click', () => {
        currentLang = 'tr';
        applyLanguage(currentLang);
    });

    
    profilePic?.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    closeModal?.addEventListener("click", function () {
        modal.style.display = "none";
    });

   
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

