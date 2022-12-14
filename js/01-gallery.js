import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		(item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
	)
	.join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", (event) => {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;
	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
	instance.show();
	const visible = instance.visible();
	if (visible) {
		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				instance.close();
			}
		});
	}
});
