'use strict';

let matrixTest: number[][] = [];
let inputOfMatrixTest: number = 5;
console.log(matrixTest);
for (let i = 0; i <= inputOfMatrixTest; i++) {
    for (let j = 0; j <= inputOfMatrixTest; j++) {
        // Előbb ellenőrizni kell, hogy létezik-e a második dimenziós array. Ha nem, létre kell hozni.
        if (!matrixTest[i]) {
            matrixTest[i] = [];
            console.log(matrixTest);
        }
        if (i + j == inputOfMatrixTest) {
            matrixTest[i][j] = 1;
        } else {
            matrixTest[i][j] = 0;
        }
    }
}