'use strict';
// Create a program that prints all the even numbers between 0 and 500

(function printEvenFunction() {
    let s: string = '';
    for (let i = 0; i <= 500; i++) {
        if (i % 2 == 0) {
            s += i + ' ';

        }
    }
    console.log(s);
})()

let myTuple: [string, number] = ["hi", 10];

let myNumArray = [];
myNumArray[0] = 1;
myNumArray[1] = 243;
myNumArray[2] = 'all fine';
myNumArray[13] = 'yex';
console.log(myNumArray);


let myNumArray2 = [1, 4, 6];
myNumArray2[3] = 12;
console.log(myNumArray2[3]);
var names: string[] = new Array("Mary", "Tom", "Jack", "Jill")
names[4] = 'Laci';
names.forEach(i => console.log(i));


var contains = false;
function Contains(element) {

    if (element == 13 || element == 21) {
        contains = true;
    }

    return contains;
}

var retval = [2, 3, 9, 0, 4, 66, 54].some(i => {
    let contains2 = false;
    if (i == 13 || i == 21) {
        contains2 = true;
    } return contains2;
});

var retval2 = [2, 3, 9, 0, 4, 66, 54].some(Contains);
console.log(retval);
console.log(retval2);

var arr = ['apple', 'orange', 'pear'];

console.log("found:", arr.indexOf("orange") != -1);
console.log(arr.indexOf('orange'));

var arr2 = [
    { "name": "apple", "count": 2 },
    { "name": "orange", "count": 5 },
    { "name": "pear", "count": 3 },
    { "name": "orange", "count": 16 },
];

var newArr = arr2.filter(function (item) {
    return item.name === "orange";
});
console.log(newArr);

// var oldArr = [{ first_name: "Colin", last_name: "Toh" }, { first_name: "Addy", last_name: "Osmani" }, { first_name: "Yehuda", last_name: "Katz" }];

// function getNewArr() {

//     return oldArr.map(function (e, index) {
//         e.full_name = [e.first_name, e.last_name].join(" ");
//         return e;
//     });
// }

var barr1 = [0, 1, 2];
var barr2 = [3, 4, 5];
barr1 = [...barr2, ...barr1]; // barr1 is now [3, 4, 5, 0, 1, 2]
console.log(barr1);

let secondTuple: [string, number] = ['test for the tuple', 1234];
console.log(`The second item in secondTuple is: ${secondTuple[1]}`);

let myNewTuple: [string, number] = ['valaki', 13];

interface IPerson {
    firstName: string;
    lastName: string;
}
var persons: { [id: number]: IPerson; } = {};
persons["p1"] = { firstName: "F1", lastName: "L1" };
persons[1] = { firstName: "f2", lastName: "l2" };
console.log(typeof (persons[1]));

for (const key in persons) {
    console.log(`The key is : ${key}, the value is: ${persons[key]}`)

}