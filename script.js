window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset;

    document.querySelectorAll('.parallax').forEach(function (section) {
        let speed = 0.05;
        section.style.backgroundPositionY = (scrollPosition * speed) + 'px';
    });
});