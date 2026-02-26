const video = document.querySelector(".video-player__video");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
const timeRemaining = document.getElementById("timeRemaining");

// SVG ICONS
const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734z"/>
  <path d="M5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696l6.363-3.692a.802.802 0 0 0 0-1.392z"/>
</svg>
`;

const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>
`;

const volumeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12z"/>
</svg>
`;

const muteIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
  <path d="M11.854 5.646a.5.5 0 0 1 0 .708L10.207 8l1.647 1.646a.5.5 0 0 1-.708.708L9.5 8.707 7.854 10.354a.5.5 0 0 1-.708-.708L8.793 8 7.146 6.354a.5.5 0 1 1 .708-.708L9.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
</svg>
`;

video.play();
playBtn.innerHTML = pauseIcon;

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = pauseIcon;
    } else {
        video.pause();
        playBtn.innerHTML = playIcon;
    }
});


// MUTE
muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? muteIcon : volumeIcon;
});

// Actualizar barra progreso
video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + "%";

    const remaining = video.duration - video.currentTime;
    timeRemaining.textContent = formatTime(remaining);
});

// Click en barra progreso
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    video.currentTime = (clickX / width) * video.duration;
});

// Formato tiempo
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

const player = document.querySelector(".video-player");

let hideTimeout;

// Mostrar controles
function showControls() {
    player.classList.remove("video-player--hide-controls");

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
        player.classList.add("video-player--hide-controls");
    }, 3000);
}

// Detectar movimiento
player.addEventListener("mousemove", showControls);

// También en touch (móvil)
player.addEventListener("touchstart", showControls);

// Iniciar temporizador al cargar
showControls();