//your JS code here. If required.
const board = document.getElementById('board');
const SQUARES = 800;


for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    board.appendChild(square);
}

function setColor(element) {
    const color = randomColor();
    element.style.backgroundColor = color;
}

function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = '#1d1d1d';
    }, 1000); // 1 second delay
}

// Random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
