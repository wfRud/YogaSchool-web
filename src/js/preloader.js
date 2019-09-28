const preload = document.querySelector('.preloader');
preload.classList.add('show');

window.addEventListener('load', () => {
    setTimeout(function () {
        preload.classList.remove('show');
    }, 2000);
})