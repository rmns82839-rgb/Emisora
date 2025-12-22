// --- CONFIGURACIÓN CLAVE DEL STREAM (LISTEN2MYRADIO) ---

// Usamos tu IP y Puerto actual. El ";stream.mp3" es necesario para Shoutcast.
const STREAM_URL = "http://78.129.132.7:14631/;stream.mp3"; 

// --- VARIABLES GLOBALES ---
const audioPlayer = document.getElementById('audio-player');
const statusMessage = document.getElementById('status-message');

// --- FUNCIÓN PRINCIPAL DE CARGA ---
function loadStream() {
    // Establece la fuente de audio con la nueva URL de Listen2MyRadio
    audioPlayer.src = STREAM_URL;
    
    // Intenta cargar el recurso
    audioPlayer.load();

    statusMessage.textContent = "Listo para reproducir. Presiona el botón PLAY.";
}

// --- GESTIÓN DE EVENTOS DEL REPRODUCTOR ---

// 1. Cuando el usuario pulsa Play
audioPlayer.addEventListener('play', () => {
    statusMessage.textContent = "▶️ ¡Al aire! Escuchando la señal de MMM Suba Rincón.";
});

// 2. Cuando hay retraso o carga (buffering)
audioPlayer.addEventListener('waiting', () => {
    statusMessage.textContent = "⏳ Cargando... conectando con el servidor de la Iglesia.";
});

// 3. Cuando el stream se detiene (usuario pulsa pausa)
audioPlayer.addEventListener('pause', () => {
    statusMessage.textContent = "⏸️ Pausado. Presiona Play para volver a sintonizar.";
});

// 4. En caso de error de conexión
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al reproducir el stream:", e);
    // Este mensaje ayuda a saber si el problema es que BUTT no está conectado
    statusMessage.textContent = "❌ Error: La señal no está disponible. Verifica que BUTT diga 'Connected'.";
});

// --- ARRANQUE ---
loadStream();
