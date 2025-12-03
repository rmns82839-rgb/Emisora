// --- Tu archivo script.js (Versión de Streaming) ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');

// ¡CLAVE! Enlace de una emisora pública de ejemplo para pruebas.
// ESTE ENLACE FUNCIONA: te sirve para verificar tu código.
const STREAM_URL = "http://radio.streamerr.co/8040/stream"; 

// --- 2. Función de Carga ---
function loadStream() {
    audioPlayer.src = STREAM_URL;
    audioPlayer.load();
    statusMessage.textContent = "Listo para reproducir. Presiona el botón PLAY.";
}

// --- 3. Gestión de Eventos ---
audioPlayer.addEventListener('play', () => {
    statusMessage.textContent = "▶️ ¡Al aire! Escuchando el stream de prueba.";
});

audioPlayer.addEventListener('waiting', () => {
    statusMessage.textContent = "⏳ Cargando... reconectando con el servidor.";
});

audioPlayer.addEventListener('pause', () => {
    statusMessage.textContent = "⏸️ Pausado. Presiona Play para continuar.";
});

audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    statusMessage.textContent = "❌ ERROR de conexión. Verifica la URL o tu servidor.";
});


// --- 4. Arranque de la Aplicación ---
loadStream();
