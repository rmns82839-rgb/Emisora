// --- 1. Variables y Configuración ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');

// ¡CLAVE! Reemplaza este enlace con la URL de STREAMING REAL 
// que te dé tu proveedor de prueba (ej. Streamerr o CastHost).
const STREAM_URL = "http://tu-servidor-de-prueba.com:8000/live"; 

// --- 2. Función de Carga ---
function loadStream() {
    // 1. Establecer la fuente de audio a la URL del stream
    audioPlayer.src = STREAM_URL;
    
    // 2. Intentar cargar el audio (importante para refrescar el stream)
    audioPlayer.load();

    // 3. Informar al usuario
    statusMessage.textContent = "Listo para reproducir. Presiona el botón PLAY.";
}

// --- 3. Gestión de Eventos (Opcional pero Útil) ---

// Cuando el usuario pulsa Play
audioPlayer.addEventListener('play', () => {
    statusMessage.textContent = "▶️ ¡Al aire! Escuchando el stream en vivo.";
});

// Cuando la carga de datos es insuficiente o hay un error
audioPlayer.addEventListener('waiting', () => {
    statusMessage.textContent = "⏳ Cargando... reconectando con el servidor.";
});

// Cuando el stream se detiene (usuario pulsa pausa o error)
audioPlayer.addEventListener('pause', () => {
    statusMessage.textContent = "⏸️ Pausado. Presiona Play para continuar.";
});

// En caso de error de red
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    statusMessage.textContent = "❌ ERROR de conexión. Verifica la URL o tu servidor.";
});


// --- 4. Arranque de la Aplicación ---
loadStream();
