'use strict';

import exportalando from "./FizzBuzz";

console.log(exportalando);

console.log("Hello László!");

// Prints a string to the terminal window
console.log('Hello world!');

// Prints an integer to the terminal window
console.log(42);

// Prints a floating point number to the terminal window
console.log(3.141592);

// Prints a boolean to the terminal window
console.log(true);

// Positive, negative and zero
console.log(42); // Prints 42
console.log(-1); // Prints -1
console.log(0); // Prints 0

console.log(12341234123412341234); // 12341234123412340000
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is:
// 9007199254740991
// The reasoning behind that number is that JavaScript uses double-precision
// floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format

console.log("The coding hours per semester: " + 6 * 17 * 5 + " hours");
let welcome: string = "Hello world";
console.log(welcome);
let isAwesome: boolean = true;
console.log(isAwesome);

let number: number = 15;
console.log(number);
number = 20;
console.log("The new value of number is: " + number);

let f: number = 12;
f++;
console.log(f); // Prints 13

let i1: number = 10;
let i2: number = 3;

console.log(i1 < i2);
let j: number = 1521;

if (j % 3 == 0) {
    console.log("j osztható 3-mal")
} else if (j % 5 == 0) {
    console.log("j osztható 5-tel")
}

let apple: any = "apple";

console.log(apple + 1);
console.log(apple * 1);

let number2: number = 15;

for (let i = 0; i < 11; i++) {
    console.log(i + " * " + number2 + " = " + i * number2);
}

function substr(str: string, keyword: string): number {
    return str.indexOf(keyword);
}
console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));
var mkdirp = require('mkdirp');
    
