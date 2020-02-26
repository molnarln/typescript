class testclass {

    nev: string;
    constructor(nev: string) {
        this.nev = nev;
    };

    @configurable(false)
    introduce(): void {
        console.log(`A nevem ${this.nev}`)
    };
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

class Families {
    private houses = ["Lannister", "Targaryen"];

    @nope
    get() {
        return this.houses;
    }
    post(request) {
        this.houses.push(request.body);
    }
    @readonly
    sayHello () {
        console.log('hello!');
    }
}

function nope(target, propertyKey, descriptor) {
    descriptor.value = function () {
        console.log("NOPEEEEEE")
        console.log(target);
        console.log(propertyKey);
    };

    return descriptor;
}

function readonly(target, propertyKey, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

let f = new Families();
// cannot override the property, it still logs 'hello!' instead of 'good bye!'
f.sayHello = ()=>{console.log('good bye!')};
f.sayHello();