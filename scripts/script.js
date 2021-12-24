(function (icon) {
    var menu = document.querySelector('.js-menu');

    icon.addEventListener('click', openMenu);

    function openMenu() {
        menu.classList.toggle('nav-pages--open');
    }

})(document.querySelector('.js-hamburger'));