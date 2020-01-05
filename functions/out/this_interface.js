var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
})();
// Return type annotated as `: Foo`
function foo(sample) {
    return sample;
}
var longhandtest = function (input) { return input; };
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
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var maradek = rest;
console.log(maradek);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.greeting);
    };
    return Greeter;
}());
var greet = new Greeter("hi there!");
greet.greet();
var obj = { input: "hello" };
console.log(obj.input);
var test1 = { input1: "valami" };
var specialImplemented = function (a, b, c) {
    if (c === void 0) { c = ''; }
    console.log(a + b + c);
};
var _b = ["egy ", "kettő ", "három"], a = _b[0], bc = _b.slice(1);
specialImplemented(a, bc.join(''));
//# sourceMappingURL=this_interface.js.map