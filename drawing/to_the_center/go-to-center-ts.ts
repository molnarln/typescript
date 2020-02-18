'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//DO NOT TOUCH THE CODE ABOVE THIS LINE
(() => {
    for (let index = 0; index < 900; index++) {
        drawCenterLine(index * 10 + 100, index * 15 + 30, 'green');
    }
    for (let index = 0; index < 900; index++) {
        drawCenterLine(index * -10 + 100, index * -15 + 30, 'yellow');
    }

    for (let index = 0; index < 900; index++) {
        drawCenterLine(index * 10 - 100, index * 15 - 30, 'red');
    }
    for (let index = 0; index < 900; index++) {
        drawCenterLine(index * -10 - 100, index * -15 - 30, 'brown');
    }
})();

function drawCenterLine(x: number, y: number, color: string) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.