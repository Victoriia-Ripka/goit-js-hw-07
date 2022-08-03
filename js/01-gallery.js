import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector('.gallery');
const cardsMarkUp = createCardsMarkUp(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', cardsMarkUp);
galleryDiv.addEventListener('click', onClick);

function createCardsMarkUp(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
</div>`
    }).join('');
}
//href="${original}" => "${preview}"

function onClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    console.log(event.target.dataset.source);
}

//   <a class="gallery__link" href="${original}"> 
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>

//Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач 
//буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.
//Додай закриття модального вікна після натискання клавіші Escape. 
//Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
//Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.