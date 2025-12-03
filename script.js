// --- CONFIGURACIÓN CLAVE DEL STREAM ---

// ¡TU ENLACE PERSONAL Y SEGURO DE CASTHOST!
// Este enlace es el que conecta a tu servidor.
const STREAM_URL = "https://stream.casthost.net/listen/mmm/radio.mp3"; 


// --- VARIABLES GLOBALES ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');


// --- FUNCIÓN PRINCIPAL DE CARGA ---
function loadStream() {
    // Establece la fuente de audio
    audioPlayer.src = STREAM_URL;
    
    // Intenta cargar el recurso
    audioPlayer.load();

    statusMessage.textContent = "Listo para reproducir. Presiona el botón PLAY.";
}


// --- GESTIÓN DE EVENTOS DEL REPRODUCTOR ---

// 1. Cuando el usuario pulsa Play
audioPlayer.addEventListener('play', () => {
    statusMessage.textContent = "▶️ ¡Al aire! Escuchando la señal en vivo.";
});

// 2. Cuando la carga de datos es insuficiente (buffering)
audioPlayer.addEventListener('waiting', () => {
    statusMessage.textContent = "⏳ Cargando... reconectando con el servidor.";
});

// 3. Cuando el stream se detiene (usuario pulsa pausa)
audioPlayer.addEventListener('pause', () => {
    statusMessage.textContent = "⏸️ Pausado. Presiona Play para continuar.";
});

// 4. En caso de error (El servidor está vacío o inactivo)
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    // Mensaje ajustado para reflejar que la URL es personal:
    statusMessage.textContent = "❌ ERROR: No se pudo conectar a la emisora. Asegúrate de que el software BUTT está transmitiendo la señal.";
});


// --- ARRANQUE ---
loadStream();
