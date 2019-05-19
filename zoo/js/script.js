let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
let mobileMenu = document.getElementById('mobile-menu');

openMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(1)';
}
closeMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(0)';
}