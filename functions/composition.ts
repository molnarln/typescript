import 'core-js/shim'
import 'core-js/modules/es6.object.assign'
let sayHiMixin = {
    sayHi() {
       console.log(`Hello ${this.name}`);
    },
    sayBye() {
       console.log(`Bye ${this.name}`);
    }
 };
 class Person123 {
    constructor(private name) {
       this.name = name;
    }
 }
 // copy the methods
 Object.assign(Person123.prototype, sayHiMixin);
 // Compiles and runs well:clera
 new Person123("John").sayHi();
