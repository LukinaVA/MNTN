let pageSlider = new Swiper('.page', {
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',

    direction: 'vertical',

    slidesPerView: 'auto',

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 700,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
        renderBullet: function (index, className) {
            if (index === 0) {
                return '<span class="'+ className +'"> Start </span>';
            }
            if (index === 4) {
                return '<span></span>';
            }
            return '<span class="'+ className +'"> ' + '0' + index + ' </span>';
        }
    },

    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true
    },
});

pageSlider.on('slideChangeTransitionEnd', animateScroll);

function animateScroll() {
    const activeSlide = document.documentElement.querySelector('.swiper-slide-active');

    const animatedElements = activeSlide.querySelectorAll('.animated-element');
    animatedElements.forEach(elem => {
        elem.classList.add('active');
    })
}

setTimeout(animateScroll, 300);