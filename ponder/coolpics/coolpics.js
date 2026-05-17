const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
});

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const img = e.target;
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        const fullSrc = src.replace('image.png', 'image (Higher Quality).png');

        modalImage.src = fullSrc;
        modalImage.alt = alt;
        modal.showModal();
    }
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.open) {
        modal.close();
    }
});
