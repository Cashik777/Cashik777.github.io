
// Countdown Timer
let time = 600;
const countdownElement = document.getElementById('countdown');
setInterval(() => {
  if (time <= 0) return;
  time--;
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  countdownElement.textContent = `${minutes}:${seconds}`;
}, 1000);
