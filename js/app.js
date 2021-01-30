document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scroll-box_right').offsetHeight * 0.4;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

const animatedElements = document.querySelectorAll('.animated-element');

if (animatedElements.length > 0) {
    window.addEventListener('scroll', animateOnScroll);
    function animateOnScroll() {
        animatedElements.forEach(elem => {
            const elemHeight = elem.offsetHeight;
            const elemTop = offset(elem).top;
            const animationFactor = 4;

            let startPoint = window.innerHeight - elemHeight / animationFactor;
            if (elemHeight > window.innerHeight) {
                startPoint = window.innerHeight - window.innerHeight / animationFactor;
            }

            if ((pageYOffset > (elemTop - startPoint)) && (pageYOffset < (elemTop + elemHeight))) {
                elem.classList.add('active');
            } else {
                if (!elem.classList.contains('anim-no-hide')) {
                    elem.classList.remove('active');
                }
            }
        })
    }

    setTimeout(animateOnScroll, 300);
}

function offset(elem) {
    const rect = elem.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}

// JQuery
$(document).ready(function () {
    let media = $('.media');
    let slider = $('.slider');

    $(window).scroll(function() {
        media.stop().animate({marginTop: $(window).scrollTop()});
        slider.stop().animate({marginTop: $(window).scrollTop()});
    });
});


