function bark() {
    console.log('woof woof')
}
bark() // => 'woof woof'

function Dog(age, weight) {
    this.species = 'Canis Familiaris'
    this.age = age
    this.weight = weight
    this.bark = bark // <-- bark() from prev snippet
}


// Spot and Bingo are 'instance-objects' of Dog
var Spot = new Dog(8, 65)
var Bingo = new Dog(10, 70)

Dog.prototype.bark = function () {
    console.log('woof woof')
}
Spot.bark() // => 'woof woof'
Bingo.bark() // => 'woof woof'

Bingo.ugat = function () {
    console.log('ugatas');
}
Bingo.ugat();
console.log(Bingo.__proto__.hasOwnProperty('ugat'));

function Foo() {
    this.something = 'blah'
}
// Foo.prototype.__proto__ === Object.prototype
Foo.hasOwnProperty('name') // => true
Foo.hasOwnProperty('something') // => false, set on instance-object not on the function
console.log(Bingo.__proto__.__proto__.__proto__); //null
console.log(Bingo.hasOwnProperty('ugat')); //true
console.log(Bingo.__proto__.hasOwnProperty('ugat')); //false
console.log(Spot.hasOwnProperty('ugat')); //false