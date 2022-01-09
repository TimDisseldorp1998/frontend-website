(function (icon) {
    const menu = document.querySelector('.js-menu');

    icon?.addEventListener('click', openMenu);

    function openMenu() {
        menu?.classList.toggle('nav-pages--open');
    }

})(document.querySelector('.js-hamburger'));

(function (icon) {
    const menu = document.querySelector('.js-element');

    icon?.addEventListener('click', openMenu);

    function openMenu() {
        menu?.classList.toggle('filter-dropdown__container--open');
    }

})(document.querySelector('.js-button'));

(function (details) {
    toggleDetails(window.innerWidth);

    window.addEventListener('resize', (e) => toggleDetails(e.target.innerWidth));

    function toggleDetails(screenSize) {
        if (screenSize >= 1000) {
            details.forEach(detail => detail.setAttribute('open', true));
        } else {
            details.forEach(detail => detail.removeAttribute('open'));
        }
    }
})(Array.from(document.querySelectorAll('details')));