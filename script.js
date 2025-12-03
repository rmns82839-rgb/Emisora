// --- CONFIGURACIÓN CLAVE DEL STREAM ---

// Este enlace de prueba (RFI Musique) utiliza HTTPS y un puerto estándar, 
// por lo que tiene una alta compatibilidad con GitHub Pages.
// Cuando tengas tu URL real de tu proveedor, sustitúyela aquí.
const STREAM_URL = "https://stream.rfi.fr/rfimusique/rfimusique.mp3"; 


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
    // Este mensaje indica que el navegador bloqueó el stream por seguridad o el enlace falló.
    statusMessage.textContent = "❌ ERROR: No se pudo conectar al servidor de streaming. Intenta recargar la página.";
});


// --- ARRANQUE ---
// Inicia la lógica del reproductor tan pronto como se carga la página
loadStream();
