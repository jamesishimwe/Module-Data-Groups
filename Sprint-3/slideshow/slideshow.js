const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let intervalId = null;

const imgElement = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

function updateImage() {
    imgElement.src = images[currentIndex];
}
function moveForward() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function moveBackward() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);
