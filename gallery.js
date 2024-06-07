const imageGallery = document.querySelector("#gallery");
let myImages = ["images/pod.jpg", "images/pod.jpg", "images/pod.jpg"]
for (let i = 0; i < myImages.length; i++){
    let image = document.createElement("img");
    image.src = myImages[i];
    image.alt = "Image at " + myImages[i];
    imageGallery.appendChild(image);
};