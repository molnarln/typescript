import {applyMixins} from './applyMixin'
class People {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class CanIntroduce {
    introduce(this) { console.log(`My name is ${this.name}`) }
}

class IntroducablePeople {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

interface IntroducablePeople extends People, CanIntroduce { }


applyMixins(IntroducablePeople, [People, CanIntroduce]);


let people1 = new IntroducablePeople('John', 12);
people1.introduce();