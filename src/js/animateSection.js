const homeSection = document.getElementById('home');
const trainingSection = document.getElementById('training');
const aboutSection = document.getElementById('about');
const gallerySection = document.getElementById('gallery');
const scheduleSection = document.getElementById('schedule');
const contactSection = document.getElementById('contact');

const animateHomeSection = function () {
    setTimeout(function () {
        homeSection.querySelector('.hero-thumb').classList.add('animated');
    }, 2000)
}

const animateSection = function (section, animateElement) {
    section.querySelector(animateElement).classList.add('animated');
};

const detectSection = function () {
    const scrollValue = window.scrollY;

    const homeHeight = homeSection.clientHeight;
    const trainingHeight = trainingSection.clientHeight;
    const aboutHeight = aboutSection.clientHeight;
    const galleryHeight = gallerySection.clientHeight;
    const scheduleHeight = scheduleSection.clientHeight;
    const contactHeight = contactSection.clientHeight;

    const trainingDistance = trainingSection.offsetTop;
    const aboutDistance = aboutSection.offsetTop;
    const galleryDistance = gallerySection.offsetTop;
    const scheduleDistance = scheduleSection.offsetTop;
    const contactDistance = contactSection.offsetTop;


    if (scrollValue < trainingHeight + (trainingDistance / 2)) {
        animateSection(trainingSection, '.section-title');
        animateSection(trainingSection, '.training__types');
    } else if (scrollValue < aboutHeight + (aboutDistance / 2)) {
        animateSection(aboutSection, '.more-about__describe');
        animateSection(aboutSection, '.more-about__portrait');
        animateSection(aboutSection, '.more-about__social');
    } else if (scrollValue < galleryHeight + (galleryDistance / 2)) {
        animateSection(gallerySection, '.gallery-describe');
        animateSection(gallerySection, '.gallery-cnt');
    } else if (scrollValue < scheduleHeight + scheduleDistance - 500) {
        animateSection(scheduleSection, '.schedule-description');
        animateSection(scheduleSection, '.calendar');
    } else if (scrollValue < contactHeight + contactDistance) {
        animateSection(contactSection, '.contact-describe');
        animateSection(contactSection, '.form-cnt');
        animateSection(contactSection, '.contact-info');
    }
}

window.addEventListener('load', animateHomeSection);
window.addEventListener('scroll', detectSection);