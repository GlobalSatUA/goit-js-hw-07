import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let modalInstance = null;

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
  gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
}

renderGallery();

gallery.addEventListener('click', event => {
  event.preventDefault();
  const clickedElement = event.target;
  if (clickedElement.nodeName !== 'IMG') {
    return;
  }
  const originalImageSrc = clickedElement.parentNode.getAttribute('href');
  const largeImage = `<img src="${originalImageSrc}" alt="${clickedElement.alt}" />`;
  modalInstance = basicLightbox.create(largeImage);
  modalInstance.show();
  document.addEventListener('keydown', handleKeyDown); 
});

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    modalInstance.close(); 
    modalInstance = null;
    document.removeEventListener('keydown', handleKeyDown); 
  }
}

