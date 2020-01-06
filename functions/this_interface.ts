(() => {
    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function (this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
)();

interface Foo {
    foo: string;
}

// Return type annotated as `: Foo`
function foo(sample: Foo): { foo: string; } {
    return sample;
}

type LongHand = {
    (a: number): number;
};

// define a method type:
type ShortHand = (a: number) => number;

let longhandtest: LongHand = (input: number) => { return input };
console.log(longhandtest(4));

interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument)

// Creata a function using function constructor
var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(2, 3));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}
console.log(theCityThatAlwaysSleeps());

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let maradek: number[] = rest;
console.log(maradek);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log("Hello, " + this.greeting);
    }
}

let greet = new Greeter("hi there!");
greet.greet();

let obj = { input: <string>"hello" }

console.log(obj.input);

interface testFace {
    input1: string
}
type testFace2 = { input1: string }

let test1: testFace = { input1: "valami" }

type specialFunction = (...args: string[]) => void;

let specialImplemented: specialFunction = (a: string, b: string, c: string = '') => {
    console.log(a + b + c);
}
let [a, ...bc] = ["egy ", "kettő ", "három"];
specialImplemented(a, bc.join(''));

class firstClass {
    static calculateSum = (a: number, b: number) => { return a + b };
}

console.log(firstClass.calculateSum(2,3));