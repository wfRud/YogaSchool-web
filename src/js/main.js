import '../scss/style.scss';
import '../images/hero-img.jpg';
import '../images/about-img.jpg';
import '../images/gallery(1).jpg';
import '../images/gallery(2).jpg';
import '../images/gallery(3).jpg';
import '../images/gallery(4).jpg';
import '../images/gallery(5).jpg';
import '../images/gallery(6).jpg';
// cSpell:disable
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// JS
import './preloader';
import './animateSection';
import './navigation';


const navigation = document.querySelector('.dot-nav');

document.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        navigation.classList.add('active');
    };
});