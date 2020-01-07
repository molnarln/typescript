// import * as _ from 'underscore';
(() => {
    // -  Create a variable named `baseNum` and assign the value `123` to it
    // -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
    // -  Log the result of `doubling(baseNum)` to the console

    let baseNum: number = 123;
    function doubling(params: number): number {
        return params * 2;
    }
    console.log(doubling(baseNum));

    // -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
    // -  Create a function called `greet` that greets it's input parameter
    //     -  Greeting is printing e.g. `Greetings, dear Green Fox`
    // -  Greet `nameToGreet`

    let nameToGreet: string = 'Green Fox';
    function greet(input: string): void {
        console.log(`Greetings, dear ${input}`);
    }
    greet(nameToGreet);

    // -  Create a string variable named `typo` and assign the value `Chinchill` to it
    // -  Write a function called `appendAFunc` that gets a string as an input,
    //    appends an 'a' character to its end and returns with a string
    // -  Print the result of `appendAFunc(typo)`

    let typo: string = 'Chinchill';
    let appendAFunc = (input: string): string => { return input + 'a'; }
    console.log(appendAFunc(typo));

    // Write a function called `sum` that returns the sum of numbers from zero to the given parameter

    // function sum(input: number): number {
    //     let array: number[] = _.range(input + 1);
    //     return array.reduce((a: number, b: number): number => { return a + b });
    // }
    // console.log(sum(4));

    // // -  Create a function called `factorio`
    // //    that returns it's input's factorial
    // let factorio = (input: number) => {
    //     let array: number[] = _.range(1, input + 1);
    //     return array.reduce((a: number, b: number): number => { return a * b });
    // }
    // console.log(factorio(3));


    // -  Create a function called `printParams`
    //    which logs to the console the input parameters
    //    (can have multiple number of arguments)

    function printParams(...rest: any[]) {
        let output: string = "";
        rest.forEach(e => output += `${e} `);
        console.log(output);
    }
    printParams("hahahaaaa", 2, 3, "loool");

    let pets = new Set(["Cat", "Dog", "Hamster"]);
    pets["species"] = "mammals";

    console.log("----------------------------------------")

    for (let pet in pets) {
        console.log(pet); // "species"
    }

    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }

    //  Create a function that takes a list of numbers as a parameter
    //  Returns a list of numbers where every number in the list occurs only once

    function unique(arr: number[]): number[] {
        let output: number[] = [];
        for (const item of arr) {
            if (!output.some((i) => i == item)) {
                output.push(item);
            }
        }
        return output;
    }

    //  Example
    console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
    //  should print: `[1, 11, 34, 52, 61]`
})()

