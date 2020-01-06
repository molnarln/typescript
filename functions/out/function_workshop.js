import * as _ from 'underscore';
(() => {
    // -  Create a variable named `baseNum` and assign the value `123` to it
    // -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
    // -  Log the result of `doubling(baseNum)` to the console
    let baseNum = 123;
    function doubling(params) {
        return params * 2;
    }
    console.log(doubling(baseNum));
    // -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
    // -  Create a function called `greet` that greets it's input parameter
    //     -  Greeting is printing e.g. `Greetings, dear Green Fox`
    // -  Greet `nameToGreet`
    let nameToGreet = 'Green Fox';
    function greet(input) {
        console.log(`Greetings, dear ${input}`);
    }
    greet(nameToGreet);
    // -  Create a string variable named `typo` and assign the value `Chinchill` to it
    // -  Write a function called `appendAFunc` that gets a string as an input,
    //    appends an 'a' character to its end and returns with a string
    // -  Print the result of `appendAFunc(typo)`
    let typo = 'Chinchill';
    let appendAFunc = (input) => { return input + 'a'; };
    console.log(appendAFunc(typo));
    // Write a function called `sum` that returns the sum of numbers from zero to the given parameter
    function sum(input) {
        let array = _.range(input);
        return array.reduce((a, b) => { return a + b; });
    }
    console.log(sum(3));
})();
//# sourceMappingURL=function_workshop.js.map