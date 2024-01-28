// scripts.js

function openLargeImage(imagePath, caption) {
    var largeImageModal = document.getElementById('largeImageModal');
    var largeImage = document.getElementById('largeImage');

    largeImage.src = imagePath;
    largeImage.alt = caption;

    largeImageModal.style.display = 'flex';  // or set it to 'block'
}

function closeLargeImage() {
    var largeImageModal = document.getElementById('largeImageModal');
    largeImageModal.style.display = 'none';
}

// Add event listeners to each small image to open large image when clicked
document.addEventListener('DOMContentLoaded', function () {
    var summerImage = document.querySelector('.summer-photos img');
    var autumnImage = document.querySelector('.autumn-photos img');
    var springImage = document.querySelector('.spring-photos img');
    var winterImage = document.querySelector('.winter-photos img');

    summerImage.addEventListener('click', function () {
        openLargeImage('images/summer/1.jpg', 'Summer');
    });

    autumnImage.addEventListener('click', function () {
        openLargeImage('images/autmn/1.jpg', 'Autumn');
    });

    springImage.addEventListener('click', function () {
        openLargeImage('images/spring/1.jpg', 'Spring');
    });

    winterImage.addEventListener('click', function () {
        openLargeImage('images/winter/1.jpg', 'Winter');
    });
});
