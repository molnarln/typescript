class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.init();
    }
    init() {
        console.log(`person created ${JSON.stringify(this)}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let person = new Person("Jack", 30);
//console.log(person._name); //error
console.log(person.name); //using getter
//# sourceMappingURL=person.js.map