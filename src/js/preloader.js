const preload = document.querySelector('.preloader');
document.body.setAttribute('style', 'overflow:hidden');
preload.classList.add('show');

window.addEventListener('load', () => {
    setTimeout(function () {
        preload.classList.remove('show');
        document.body.setAttribute('style', 'overflow:visible');
    }, 2000);
})