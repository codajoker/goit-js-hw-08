import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = makeImageCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function makeImageCard(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
`;
    })
    .join('');
}

galleryContainer.addEventListener('click', ongalleryContainerClick);

function ongalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  //    galleryItems.map((item) => {
  //      if (item.original === evt.target.dataset.source) {
  //        const instance = basicLightbox.create(
  //          ` <img src=${item.original} width="800" height="600">`
  //        );

  //        instance.show();
  //        document.addEventListener("keydown", (event) => {
  //          if (event.key === "Escape") {
  //            instance.close();
  //          }
  //        });
  //      }
  //    });
}
let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log();
console.log(galleryItems);
