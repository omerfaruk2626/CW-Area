document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector('.header-video');
    const muteButton = document.getElementById('muteButton');

    let isMuted = false;

    function toggleMute() {
        isMuted = !isMuted;
        video.muted = isMuted;
    }

    muteButton.addEventListener('click', toggleMute);
});

function openModal(imageSrc, altText) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'flex';  // Display the modal
    modalImage.src = imageSrc;     // Set the image source
    modalImage.alt = altText;      // Set the alt text
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';  // Hide the modal
}


