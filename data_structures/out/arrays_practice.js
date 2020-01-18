// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _this = this;
var magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);
// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`
var firstList = [1, 2, 3];
var secondList = [4, 5];
if (secondList.length > firstList.length) {
    console.log('"p2 is longer"');
}
else {
    console.log('"p2 is not longer"');
}
// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element
var r = [54, 23, 66, 12];
console.log(r[1] + r[2]);
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`
var abc = ["Arthur", "Boe", "Chloe"];
var temp;
temp = abc[0];
abc[0] = abc[2];
abc[2] = temp;
console.log(abc);
// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method
var integers = [4, 5, 6, 7];
for (var key in integers) {
    console.log(integers[key]);
}
integers.forEach(function (element) {
    console.log(element);
});
var allNumbersInIntegers = '';
integers.forEach(function (e) { return allNumbersInIntegers += e.toString(); });
console.log(allNumbersInIntegers);
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
var numList = [1, 2, 3, 4, 5];
numList[2]++;
console.log(numList);
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end
//Ebben az esetben be kell adni reference-ként az eredeti array-t is a foreach paramétereként:
var animals = ["koal", "pand", "zebr"];
console.log(animals);
animals.forEach(function (v, i) {
    animals[i] += 'a';
}, animals);
console.log(animals);
//De úgy is lehet, hogy nem a foreach paramétereként, hanem a callback function paramétereként adjuk meg az eredeti arrayt:
animals.forEach(function (v, i, a) {
    a[i] += 'a';
});
console.log(animals);
// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
var drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks.forEach(function (value, index) {
    drinks[index] += drinks[index];
});
console.log(drinks);
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`
var colors = [
    ["lime", "forest green", "olive", "pale green", "spring green"],
    ["orange red", "red", "tomato"],
    ["orchid", "violet", "pink", "hot pink"]
];
console.log(colors[0][1]);
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
var ai = [3, 4, 5, 6, 7];
var sum = 0;
ai.forEach(function (e) { return sum += e; });
console.log(sum);
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print array two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var matrix = [];
var inputOfMatrix = 5;
for (var i = 0; i <= inputOfMatrix; i++) {
    for (var j = 0; j <= inputOfMatrix; j++) {
        // Előbb ellenőrizni kell, hogy létezik-e a második dimenziós array. Ha nem, létre kell hozni.
        if (!matrix[i]) {
            matrix[i] = [];
        }
        if (i + j == inputOfMatrix) {
            matrix[i][j] = 1;
        }
        else {
            matrix[i][j] = 0;
        }
    }
}
matrix.forEach(function (e) { return console.log(e); });
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
var numListToReverse = [3, 4, 5, 6, 7];
// a ... (spread) operátor shallow copy-t készít, de mivel az array primitíveket tartalmaz, így ebben az esetben teljesen új array lesz az eredmény. Reference
// type-nál már nem működne (csak egy szintig megy a shallow copy), object-eket vagy array-eket tartalmazó array-nél deep copy kell (lodash library)
var copyOfNumListToReverse = __spreadArrays(numListToReverse);
copyOfNumListToReverse.reverse();
console.log("The original numbers: " + numListToReverse);
console.log("The reversed numbers: " + copyOfNumListToReverse);
var tempArray = [];
for (var i = 0; i < numListToReverse.length; i++) {
    tempArray[i] = numListToReverse[numListToReverse.length - (i + 1)];
}
console.log("The second reversed array: " + tempArray);
for (var _i = 0, numListToReverse_1 = numListToReverse; _i < numListToReverse_1.length; _i++) {
    var item = numListToReverse_1[_i];
    console.log(item);
}
var anotherArray = [];
anotherArray[0] = 1;
anotherArray[1] = 1;
anotherArray[2] = 1;
anotherArray[3] = 1;
console.log("AnotherArray eredetileg: ");
anotherArray.forEach(function (e) { return console.log(e); });
function haromszorozo(e) {
    return e * 3;
}
var multipliedArray = [];
anotherArray = anotherArray.map(function (e) { return haromszorozo(e); });
console.log("AnotherArray felszorozva 3-mal a haromszorozo function-nel: ");
anotherArray.forEach(function (e) { return console.log(e); });
console.log('-----------------------------------------');
anotherArray.forEach(function (val, i) {
    anotherArray[i] = val * 3;
});
anotherArray.forEach(function (e) { return console.log(e); });
function multiplyArrayByThree(val, i, array) {
    array[i] = val * 3;
}
anotherArray.forEach(function (e) { return multiplyArrayByThree(e, anotherArray.indexOf(e), anotherArray); });
anotherArray.forEach(function (e) { return console.log(e); });
anotherArray.forEach(function (val, ind, array) {
    _this[ind] = _this[ind] * 3;
}, anotherArray);
console.log('--------------------------------------------');
anotherArray.forEach(function (e) { return console.log(e); });
//# sourceMappingURL=arrays_practice.js.map