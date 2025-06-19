
const winners = [
  "Alice won $4,500 on MegaSpin!",
  "Bob won $2,750 on Roulette!",
  "Christine won $6,320 on Jackpot Blaze!"
];
const list = document.getElementById("winners");
winners.forEach(win => {
  const li = document.createElement("li");
  li.textContent = win;
  list.appendChild(li);
});
