var Animal = function (name) {
    this.name = name;
}

var Alligator = function (name) {
    Animal.call(this, name); // Call parent constructor
}

// Extend the prototype
Alligator.prototype = Object.create(Animal.prototype);
Alligator.prototype.constructor = Alligator;

var jack = new Alligator("jack");
console.log(jack.name);
console.log(Alligator.prototype.constructor);
console.log(Alligator.prototype);




function Dog2(age, weight) {
    this.age = age
    this.weight = weight
}
Dog2.prototype.bark = function () { console.log('woof woof') }

function Labrador(furColor, age, weight) {
    this.furColor = furColor
    this.breed = 'labrador'
    Dog2.call(this, age, weight)
}
Labrador.prototype = Object.create(Dog2.prototype)
Labrador.prototype.constructor = Labrador;

let fules = new Labrador('brown', 234, 423);

console.log(Labrador.prototype.constructor);
console.log(fules.furColor);
console.log(fules instanceof Dog2);
console.log(fules instanceof Labrador);
