const galleryCnt = document.getElementById('stockGallery');
const galleryItems = galleryCnt.querySelectorAll('.gallery-item');

const lightBoxBackground = () => {
    const hero = document.getElementById('home');
    document.documentElement.style.scrollBehavior = 'unset';
    window.location.href = '#home';

    const lightBoxBackGround = document.createElement('div');
    lightBoxBackGround.classList.add('lightbox-Bg');
    document.body.insertBefore(lightBoxBackGround, hero);
}

const lightBoxContent = (imgElement) => {
    const hero = document.getElementById('home');
    const lbCnt = document.createElement('div');
    const lbContent = document.createElement('div');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    const prevIcon = document.createElement('i');
    const nextIcon = document.createElement('i');
    const closeIcon = document.createElement('i');

    const figureCnt = document.createElement('div');
    const closeBtn = document.createElement('button');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figCaption = document.createElement('figcaption');
    const lbCounter = document.createElement('p');
    let srcAttr = imgElement.getAttribute('src');

    lbCnt.classList.add('lightBox-cnt');
    lbContent.classList.add('lb__content');
    figureCnt.classList.add('lb-figure');
    closeBtn.classList.add('btn');
    closeBtn.classList.add('close-btn');
    img.classList.add('lb-img');
    lbCounter.classList.add('lb-counter');
    prevBtn.classList.add('btn', '--previous', 'lb-arrow');
    nextBtn.classList.add('btn', '--next', 'lb-arrow');
    prevIcon.classList.add('fas', 'fa-arrow-left');
    nextIcon.classList.add('fas', 'fa-arrow-right');
    closeIcon.classList.add('fas', 'fa-times');

    img.setAttribute('src', `${srcAttr}`);
    img.setAttribute('alt', 'pic');
    img.classList.add('lb-img');

    prevBtn.appendChild(prevIcon);
    nextBtn.appendChild(nextIcon);
    closeBtn.appendChild(closeIcon);
    figCaption.appendChild(lbCounter);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    figureCnt.appendChild(closeBtn);
    figureCnt.appendChild(figure);

    lbContent.appendChild(figureCnt);
    lbContent.appendChild(prevBtn);
    lbContent.appendChild(nextBtn);

    lbCnt.appendChild(lbContent);

    document.body.insertBefore(lbCnt, hero);
}

const closeLightBox = () => {
    document.body.setAttribute('style', 'overflow:visible');
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 1000);
    window.location.href = '#gallery';
    document.querySelector('.lightbox-Bg').remove();
    document.querySelector('.lightBox-cnt').remove();
}

const switchImage = (index) => {
    const arrows = document.querySelectorAll('.lb-arrow');
    const lbImg = document.querySelector('.lb-img');
    let counter = index;
    arrows.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('--next')) {
                counter < 5 ? counter++ : counter = 0;
                lbImg.setAttribute('src', `./images/gallery(${counter}).jpg`);
            } else {
                counter > 0 ? counter-- : counter = 5;
                lbImg.setAttribute('src', `./images/gallery(${counter}).jpg`);
            }
        })
    })
}

galleryItems.forEach((picture, index) => (
    picture.addEventListener('click', () => {
        document.body.setAttribute('style', 'overflow:hidden');
        const closeBtn = document.querySelector('.close-btn');
        lightBoxBackground();
        lightBoxContent(picture.firstElementChild);
        closeBtn.addEventListener('click', closeLightBox);
        switchImage(index);
    })
));