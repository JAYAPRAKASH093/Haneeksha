const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    }
});
