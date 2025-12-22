const STREAM_URL = "http://78.129.237.51:10818/;stream.mp3"; 

const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');
const playBtn = document.getElementById('play-pause-btn');
const btnImg = document.getElementById('btn-img');

audioPlayer.src = STREAM_URL;

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play()
            .then(() => {
                statusMessage.textContent = "🔊 TRANSMITIENDO EN VIVO";
                btnImg.src = "pause-icon.png"; // Cambia a la imagen de pausa
            })
            .catch(err => {
                statusMessage.textContent = "❌ Error: Permita 'Contenido no seguro'";
                console.error(err);
            });
    } else {
        audioPlayer.pause();
        statusMessage.textContent = "PAUSADO";
        btnImg.src = "play-icon.png"; // Vuelve a la imagen de play
    }
});
