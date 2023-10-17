document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const headline = document.querySelector('.headline');

    btn.addEventListener('click', () => {
        nav.classList.toggle('menu-open');
        menuOpen = !menuOpen;
        if (menuOpen) {
            headline.classList.add('hidden');
        } else {
            headline.classList.remove('hidden');
        }
    });
});

// плавное появление хедлайн елементов

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title");
    const headlineImg = document.querySelector(".headline-img");
    const headlineBtn = document.querySelector(".headline-btn");

    if (title) {
        setTimeout(function () {
            title.classList.add("show");
        }, 100); // Добавьте небольшую задержку для плавного появления
    }

    if (headlineImg) {
        setTimeout(function () {
            headlineImg.classList.add("show");
        }, 200); // Задержка для плавного появления
    }

    if (headlineBtn) {
        setTimeout(function () {
            headlineBtn.classList.add("show");
        }, 300); // Задержка для плавного появления
    }
});


// плавное появление справа

document.addEventListener("DOMContentLoaded", function () {
    const newsSection = document.querySelector(".news-section");

    if (newsSection) {
        const sectionOffset = newsSection.offsetTop;
        const windowHeight = window.innerHeight;

        function checkScroll() {
            const scrollPosition = window.scrollY;

            if (scrollPosition + windowHeight > sectionOffset) {
                newsSection.classList.add("show");
                window.removeEventListener("scroll", checkScroll);
            }
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll(); 
    }
});
