
const feed = document.getElementById('feed');
const updates = [
  'Olivia from Calgary won $320 on Vavada! 🎉',
  'Ethan from Ottawa claimed 100 free spins! 🎰',
  'Sophia from Quebec deposited $200 🎯',
  'Lucas from Edmonton signed up and won instantly! 🤑'
];

let index = 0;
setInterval(() => {
  const li = document.createElement('li');
  li.textContent = updates[index];
  li.style.animation = 'fadeIn 1s ease-in-out';
  feed.prepend(li);
  if (feed.children.length > 4) {
    feed.removeChild(feed.lastChild);
  }
  index = (index + 1) % updates.length;
}, 7000);
