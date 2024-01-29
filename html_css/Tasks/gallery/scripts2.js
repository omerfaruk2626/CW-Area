function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';  // Hide the modal
}

document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector('.video');
    const muteButton = document.getElementById('muteButton');

    let isMuted = false;

    function toggleMute() {
        isMuted = !isMuted;
        video.muted = isMuted;
    }

    muteButton.addEventListener('click', toggleMute);
});
