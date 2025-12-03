// --- CONFIGURACIÓN CLAVE DEL STREAM (TU ENLACE PERSONAL) ---

// **IMPORTANTE:** Revisa que este enlace sea el correcto de tu servidor CastHost
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

// 4. En caso de error de conexión
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    // Este mensaje indica que el servidor no está transmitiendo audio.
    statusMessage.textContent = "❌ ERROR: El servidor está en línea, pero no está transmitiendo audio (verifica el AutoDJ o BUTT).";
});


// --- ARRANQUE ---
loadStream();
