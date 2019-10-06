const preload = document.querySelector('.preloader');
document.body.setAttribute('style', 'overflow:hidden');
preload.classList.add('show');

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(function () {
        preload.classList.remove('show');
        document.body.setAttribute('style', 'overflow:visible');
    }, 2000);
})