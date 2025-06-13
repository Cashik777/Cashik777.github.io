
function spinWheel() {
  const result = document.getElementById('result');
  const prizes = ["$5", "$50", "$0", "$10", "$250", "$1000", "Try Again"];
  const outcome = prizes[Math.floor(Math.random() * prizes.length)];
  result.innerText = "🎉 You won: " + outcome + "!";
}
