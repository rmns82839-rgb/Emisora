// --- CONFIGURACIÓN CLAVE DEL STREAM (DATOS ACTUALIZADOS) ---

// IP y Puerto obtenidos de tu última conexión exitosa en BUTT (Imagen 17).
// IMPORTANTE: Se usa la nueva IP 78.129.237.51 y el Puerto 10818.
const STREAM_URL = "http://78.129.237.51:10818/;stream.mp3"; 

// --- VARIABLES GLOBALES ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');

// --- FUNCIÓN PRINCIPAL DE CARGA ---
function loadStream() {
    // Establece la fuente de audio con los datos actuales del servidor
    audioPlayer.src = STREAM_URL;
    
    // Carga el recurso para que esté listo al presionar Play
    audioPlayer.load();

    statusMessage.textContent = "Listo para reproducir. Presiona el botón PLAY.";
}

// --- GESTIÓN DE EVENTOS DEL REPRODUCTOR ---

// 1. Cuando el usuario pulsa Play
audioPlayer.addEventListener('play', () => {
    statusMessage.textContent = "▶️ ¡Al aire! Escuchando la señal de MMM Suba Rincón.";
});

// 2. Cuando hay retraso o carga de datos (buffering)
audioPlayer.addEventListener('waiting', () => {
    statusMessage.textContent = "⏳ Cargando... conectando con el servidor de la Iglesia.";
});

// 3. Cuando el usuario pausa la reproducción
audioPlayer.addEventListener('pause', () => {
    statusMessage.textContent = "⏸️ Pausado. Presiona Play para volver a sintonizar.";
});

// 4. En caso de error (si el servidor se apaga o BUTT se desconecta)
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    // Mensaje de ayuda para el administrador
    statusMessage.textContent = "❌ Error: La señal no está disponible. Verifica que BUTT diga 'Connected'.";
});

// --- ARRANQUE ---
loadStream();
