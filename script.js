// --- CONFIGURACIÓN TÉCNICA (LISTEN2MYRADIO) ---
const STREAM_URL = "http://78.129.237.51:10818/;stream.mp3"; 

// --- ELEMENTOS DE LA INTERFAZ ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');
const playBtn = document.getElementById('play-pause-btn');
const statusDot = document.getElementById('dot');

// --- FUNCIÓN DE INICIO ---
function initRadio() {
    audioPlayer.src = STREAM_URL;
    statusMessage.textContent = "Señal lista. Presione Play.";
}

// --- LÓGICA DEL BOTÓN PERSONALIZADO ---
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play()
            .then(() => {
                statusMessage.textContent = "¡Al aire! Bendiciendo tu vida.";
                statusDot.className = "dot-active";
                playBtn.innerHTML = '<i class="fas fa-pause"></i> PAUSAR';
            })
            .catch(error => {
                console.error("Error:", error);
                statusMessage.textContent = "❌ Error de conexión. Reintente.";
                alert("Recuerde permitir 'Contenido no seguro' en el candado del navegador.");
            });
    } else {
        audioPlayer.pause();
        statusMessage.textContent = "Transmisión pausada.";
        statusDot.className = "dot-inactive";
        playBtn.innerHTML = '<i class="fas fa-play"></i> ESCUCHAR AHORA';
    }
});

// Manejo de errores automáticos (si BUTT se desconecta)
audioPlayer.addEventListener('error', () => {
    statusMessage.textContent = "❌ Señal fuera de línea (Verificar BUTT).";
    statusDot.className = "dot-inactive";
});

// Inicializar al cargar la página
initRadio();
