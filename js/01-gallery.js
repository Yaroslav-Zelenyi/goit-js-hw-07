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

galleryEl.addEventListener("click", (el) => {
  el.preventDefault();
  if (el.target.nodeName !== "IMG") return;

  const targetLink = el.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${targetLink}" width="800" height="600"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", EscKeyClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", EscKeyClose);
      },
    }
  );
  instance.show();

  function EscKeyClose(el) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = el.code === ESC_KEY_CODE;
    if (isEscKey) {
      instance.close();
    }
  }
});
