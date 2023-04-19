import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");

galleryEl.innerHTML = markupGallery;

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const lightModalEl = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  lightModalEl.show();

  galleryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      lightModalEl.close();
    }
  });
}

galleryEl.addEventListener("click", onImageClick);
