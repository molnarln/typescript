import { Line } from './other/lines'
class Point {
    x: number;
    y: number;
    draw(): void {
        console.log(`The x coordinate is: ${this.x}, the y coordinate is: ${this.y}`);
    }
}

let a = new Point();
a.x = 21;
a.y = 32;
a.draw();
let b = new Line(234, 342);

console.log(b.a, b.b);