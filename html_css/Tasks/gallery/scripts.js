document.addEventListener('DOMContentLoaded', function () {
    // Video elementini seçin
    var video = document.querySelector('.header-video');

    // Mute butonunu seçin
    var muteButton = document.getElementById('muteButton');

    // Mute butonunu en sağa konumlandırın
    document.querySelector('.mute').style.marginLeft = 'auto';

    // Videoya tıklama dinleyicisi ekleyin
    muteButton.addEventListener('click', function () {
        // Video sessiz ise, sesi açın; aksi takdirde sessizleştirin
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });
});