(() => {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function () {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
})();
// Return type annotated as `: Foo`
function foo(sample) {
    return sample;
}
let longhandtest = (input) => { return input; };
console.log(longhandtest(4));
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
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
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let maradek = rest;
console.log(maradek);
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = Object.assign(Object.assign({}, defaults), { food: "rich" });
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        console.log("Hello, " + this.greeting);
    }
}
let greet = new Greeter("hi there!");
greet.greet();
let obj = { input: "hello" };
console.log(obj.input);
let test1 = { input1: "valami" };
let specialImplemented = (a, b, c = '') => {
    console.log(a + b + c);
};
let [a, ...bc] = ["egy ", "kettő ", "három"];
specialImplemented(a, bc.join(''));
class firstClass {
}
firstClass.calculateSum = (a, b) => { return a + b; };
console.log(firstClass.calculateSum(2, 3));
//# sourceMappingURL=this_interface.js.map