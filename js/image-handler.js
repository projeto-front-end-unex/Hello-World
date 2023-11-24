const inputFile = document.querySelector("#picture-input");
const pictureImage = document.querySelector(".picture-image");
const defaultImage = "/assets/img/svg/defaultCurriculo.svg";

function createAndAppendImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("picture-img");

  pictureImage.innerHTML = "";
  pictureImage.appendChild(img);
}

createAndAppendImage(defaultImage);

inputFile.addEventListener("change", function (event) {
  const inputTarget = event.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (event) {
      const readerTarget = event.target;
      createAndAppendImage(readerTarget.result);
    });

    reader.readAsDataURL(file);
  } else {
    createAndAppendImage(defaultImage);
  }
});
