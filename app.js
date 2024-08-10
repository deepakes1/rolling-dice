const button = document.getElementById('but');
const box = document.querySelector('.box');
let num = document.getElementById('num')

function playRollSound() {
  const audio = new Audio();

  audio.src = 'rpg-dice-rolling-95182.mp3';

  // Play the sound effect
  audio.play();
}
button.addEventListener('click', () => {
  playRollSound();
  
  box.classList.add('roll');

  setTimeout(() => {
    box.classList.remove('roll');
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    box.innerHTML = `<h1>${randomNumber}</h1>`;
    num.textContent = randomNumber;
  }, 2000);

  
});