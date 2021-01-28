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

$(document).ready(function () {
    let media = $('.media');
    let slider = $('.slider');

    $(window).scroll(function() {
        media.stop().animate({marginTop: $(window).scrollTop()});
        slider.stop().animate({marginTop: $(window).scrollTop()});
    });
});


