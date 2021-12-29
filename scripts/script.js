(function (icon) {
    var menu = document.querySelector('.js-menu');

    icon.addEventListener('click', openMenu);

    function openMenu() {
        menu.classList.toggle('nav-pages--open');
    }

})(document.querySelector('.js-hamburger'));

(function (icon) {
    var menu = document.querySelector('.js-element');

    icon.addEventListener('click', openMenu);

    function openMenu() {
        menu.classList.toggle('filter-dropdown__container--open');
    }

})(document.querySelector('.js-button'));