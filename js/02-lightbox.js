import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', item.original);

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', item.preview);
  galleryImage.setAttribute('alt', item.description);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  close: true,
  history: false,
});

console.log(galleryItems);
