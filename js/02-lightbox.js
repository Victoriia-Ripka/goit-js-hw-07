import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector('.gallery');
const cardsMarkUp = createCardsMarkUp(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', cardsMarkUp);
galleryDiv.addEventListener('click', onClick);

function createCardsMarkUp(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`}).join('');
}

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    let gallery = new SimpleLightbox('.gallery__item', {
        captionDelay: 250,
        captionsData: "alt",
    });
    gallery.on('show.simplelightbox');
}