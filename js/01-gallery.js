import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  listItem.innerHTML = `
      <a class="gallery__link" href="${item.original}">
        <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
      </a>
    `;
  gallery.appendChild(listItem);
});

// Event delegation to Open Modal

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;
    console.log(imageUrl);

    const instance = basicLightbox.create(`img src="${imageUrl}" alt="image"`);
    instance.show();
  }
});

console.log(galleryItems);
