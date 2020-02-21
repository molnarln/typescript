class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
        this.init();
    }

    private init() {
        console.log(`person created ${JSON.stringify(this)}`);
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

let person: Person = new Person("Jack", 30);
//console.log(person._name); //error
console.log(person.name); //using getter