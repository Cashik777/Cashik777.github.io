
let sec = 600;
function updateTimer() {
  const min = Math.floor(sec / 60);
  const rem = sec % 60;
  document.getElementById("timer").textContent = `${min}:${rem < 10 ? "0" : ""}${rem}`;
  if (sec > 0) sec--;
}
setInterval(updateTimer, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const text = ["Top Bonuses for Canadians", "No Deposit Free Spins", "Trusted Casino Offers"];
  let i = 0;
  const el = document.getElementById("typed-text");
  function type() {
    el.textContent = text[i];
    i = (i + 1) % text.length;
  }
  type();
  setInterval(type, 3000);
});

setInterval(() => {
  const feed = document.getElementById("live-feed");
  const first = feed.firstElementChild;
  feed.appendChild(first.cloneNode(true));
  feed.removeChild(first);
}, 6000);
