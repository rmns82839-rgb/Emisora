const STREAM_URL = "http://78.129.237.51:10818/;stream.mp3"; 

const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');
const playBtn = document.getElementById('play-pause-btn');
const btnImg = document.getElementById('btn-img');

// Pre-carga la URL
audioPlayer.src = STREAM_URL;

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        // En GitHub, el play() debe ser activado por un clic real
        audioPlayer.play()
            .then(() => {
                statusMessage.textContent = "▶️ AL AIRE - BENDICIONES";
                btnImg.src = "pause-icon.png"; 
            })
            .catch(err => {
                statusMessage.textContent = "❌ ERROR: Haz clic en el candado y permite 'Contenido no seguro'";
                console.error("Error de reproducción:", err);
            });
    } else {
        audioPlayer.pause();
        statusMessage.textContent = "PAUSADO";
        btnImg.src = "play-icon.png";
    }
});

// Detectar si el servidor de la radio se cae
audioPlayer.addEventListener('error', () => {
    statusMessage.textContent = "❌ SEÑAL NO DISPONIBLE (REVISA BUTT)";
});
