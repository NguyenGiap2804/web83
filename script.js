const messages = [
    "Chúc các 8/3 thật vui vẻ, dồi dào sức khỏe và hạnh phúc!",
    "Chúc các bạn luôn vui vẻ, xinh đẹp và trẻ trung!",
    "Chúc các bạn phụ nữ luôn thành công trong cuộc sống!",
    "Chúc các bạn phụ nữ luôn xinh đẹp và duyên dáng!",
    "Chúc các bạn phụ nữ luôn hạnh phúc và thành công!",
];
let messageIndex = 0;

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nextBtn = document.getElementById('next-btn');
const messageElement = document.getElementById('message');
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

const correctPassword = "banlanguoituyetvoinhat";
const passwordModal = document.getElementById('password-modal');
const passwordInput = document.getElementById('password-input');
const submitPassword = document.getElementById('submit-password');
const errorMessage = document.getElementById('error-message');
const mainContent = document.getElementById('main-content');


// Kiểm tra mật khẩu
submitPassword.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        passwordModal.classList.add('hidden');
        mainContent.classList.remove('hidden');
        playMusic(); // Phát nhạc sau khi đăng nhập thành công
    } else {
        errorMessage.classList.remove('hidden');
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 3000); // Ẩn thông báo sau 3 giây
    }
});

// Cho phép nhấn Enter để xác nhận mật khẩu
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitPassword.click();
    }
});


// Kiểm tra và xử lý tự động phát nhạc trên điện thoại
function playMusic() {
    music.play().catch(() => {
        musicToggle.style.display = 'block';
        musicToggle.textContent = 'Bật nhạc';
    });
}

playMusic();

// Sự kiện chuyển đổi bật/tắt nhạc
musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play().then(() => {
            musicToggle.textContent = 'Tắt nhạc';
        }).catch(() => {
            alert('Không thể phát nhạc. Vui lòng kiểm tra file âm thanh!');
        });
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