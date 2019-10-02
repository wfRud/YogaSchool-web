const hamburger = document.querySelector('.hamburger');
const navigation = document.getElementById('navigation');
const dotNavLink = navigation.querySelectorAll('.dot-nav__link');

const menuLinkClick = () => {
    hamburger.classList.toggle('active');
    navigation.querySelector('.dot-nav').classList.toggle('active');
};

const handleClick = () => {
    hamburger.classList.toggle('active');
    navigation.querySelector('.dot-nav').classList.toggle('active');
};

hamburger.addEventListener('click', handleClick);
dotNavLink.forEach(linkElement => {
    linkElement.addEventListener('click', menuLinkClick);
});