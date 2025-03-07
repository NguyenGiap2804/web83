const messages = [
    "Chúc mẹ 8/3 thật vui vẻ nha!",
    "Mẹ là người phụ nữ tuyệt vời nhất!",
    "Mẹ ơi, con yêu mẹ nhiều lắm!"
];
let messageIndex = 0;

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nextBtn = document.getElementById('next-btn');
const messageElement = document.getElementById('message');
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

// Kiểm tra và xử lý tự động phát nhạc trên điện thoại
function playMusic() {
    music.play().catch(() => {
        musicToggle.style.display = 'block';
        musicToggle.textContent = 'Bật nhạc';
        musicToggle.onclick = () => {
            music.play();
            musicToggle.textContent = 'Tắt nhạc';
        };
    });
}

playMusic();

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = 'Tắt nhạc';
    } else {
        music.pause();
        musicToggle.textContent = 'Bật nhạc';
    }
});

nextBtn.addEventListener('click', () => {
    messageIndex++;
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
    } else {
        page1.classList.remove('active');
        page2.classList.add('active');
    }
});