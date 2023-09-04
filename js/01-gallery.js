import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", markup);
galleryContainer.addEventListener("click", handleGalleryClick);
function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`;
    })
    .join("");
}

function handleGalleryClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600"/>`
  );
  instance.show();
}

console.log(galleryItems);
