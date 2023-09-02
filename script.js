
document.addEventListener('DOMContentLoaded', function() {
const dynamicWord = document.getElementById('cambiante');
const colors = ['red', 'blue', 'green'];
let currentColorIndex = 0;
let currentWordIndex = 0;

function changeWordAndColor() {
dynamicWord.textContent = words[currentWordIndex];
dynamicWord.className = colors[currentColorIndex];

currentColorIndex = (currentColorIndex + 1) % colors.length;
currentWordIndex = (currentWordIndex + 1) % words.length;
}

const words = ['Ilver',
'Villarreal',
'GOOO'];
const interval = 2000; // Cambia cada 2 segundos

setInterval(changeWordAndColor, interval);
});
