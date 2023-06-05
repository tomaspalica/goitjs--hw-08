// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import 'simplelightbox/dist/simple-lightbox.min.css';
const shownGallery = document.querySelector(".gallery")

const addedGallery = galleryItems
.map(el => `<a class="gallery__item" href="${el.original}">
<img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`)
.join("")
shownGallery.insertAdjacentHTML("afterbegin",addedGallery)

new SimpleLightbox('.gallery a', { 
    captionType: "alt",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
 });