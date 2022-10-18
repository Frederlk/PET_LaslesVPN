import Swiper, { Navigation, Pagination, Keyboard } from "swiper";

// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".testimonials__slider")) {
        new Swiper(".testimonials__slider", {
            modules: [Navigation, Pagination, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 2.5,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            pagination: {
                el: ".testimonials__pagination",
                type: "bullets",
                clickable: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },

            // Кнопки "влево/вправо"
            navigation: {
                nextEl: ".testimonials__navigation-arrow_next",
                prevEl: ".testimonials__navigation-arrow_prev",
            },

            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767.98: {
                    slidesPerView: 2,
                },
                991.98: {
                    slidesPerView: 2.5,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
