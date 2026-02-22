const modal = document.getElementById('hireModal');
const hireButtons = document.querySelectorAll('.hire-trigger');
const cancelHire = document.getElementById('cancelHire');
const confirmHire = document.getElementById('confirmHire');
const starButtons = document.querySelectorAll('.stars button');

hireButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.hidden = false;
  });
});

cancelHire?.addEventListener('click', () => {
  modal.hidden = true;
});

confirmHire?.addEventListener('click', () => {
  modal.hidden = true;
  const successCard = document.querySelector('.success-card');
  successCard.animate(
    [
      { transform: 'scale(0.97)', opacity: 0.5 },
      { transform: 'scale(1)', opacity: 1 }
    ],
    { duration: 320, easing: 'ease-out' }
  );
});

starButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    starButtons.forEach((star, i) => {
      star.classList.toggle('active', i <= index);
    });
  });
});
