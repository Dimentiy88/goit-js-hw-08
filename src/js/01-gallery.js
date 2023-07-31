// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItemsMarkup() {
  const galleryEl = galleryItems
    .map(
      item =>
        `<li>
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join('');

  gallery.innerHTML = galleryEl;
}
createGalleryItemsMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
