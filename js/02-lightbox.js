import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function CreateGalleryMarckup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
  `;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", CreateGalleryMarckup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
});
