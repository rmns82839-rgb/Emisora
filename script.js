// --- CONFIGURACIÓN CLAVE DEL STREAM ---

// ENLACE DIRECTO DEL STREAM:
// Este enlace apunta directamente al flujo de audio de la emisora Maranatha Radio.
// Funciona con HTTPS, lo que previene los errores de seguridad en GitHub Pages.
const STREAM_URL = "https://21653.live.streamerr.co:8040/listen"; 


// --- VARIABLES GLOBALES ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');


// --- FUNCIÓN PRINCIPAL DE CARGA ---
function loadStream() {
    // Establece la fuente de audio a la URL del stream
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
    statusMessage.textContent = "❌ ERROR: No se pudo conectar al servidor de streaming. Intenta recargar la página.";
});


// --- ARRANQUE ---
// Inicia la lógica del reproductor tan pronto como se carga la página
loadStream();
