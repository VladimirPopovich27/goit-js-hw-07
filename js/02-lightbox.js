import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryEl.innerHTML = markupGallery;

const lightbox = new SimpleLightbox(".gallery a", {
  navText: ["←", "→"],
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 0,
  animationSpeed: 250,
});

lightbox.on("show.simplelightbox");
