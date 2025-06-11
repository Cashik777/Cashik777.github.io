
document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("countdown");
    let seconds = 600; // 10 minutes
    const timer = setInterval(() => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        countdown.textContent = `⏳ Bonus expires in: ${min}m ${sec < 10 ? '0' : ''}${sec}s`;
        if (seconds-- <= 0) clearInterval(timer);
    }, 1000);

    // Live feed animation (optional enhancement)
    const feed = document.getElementById("live-feed");
    setInterval(() => {
        const clone = feed.children[0].cloneNode(true);
        feed.appendChild(clone);
        feed.removeChild(feed.children[0]);
    }, 6000);
});
