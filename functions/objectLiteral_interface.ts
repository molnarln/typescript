// Object literal declaration with type and interface
type ObjLiteralType = { x: number, y: number };
interface ObjLiteralType2 {
    x: number;
    y: number;
}

let objectlit: ObjLiteralType = { x: 1234, y: 123412 };

var val: { x: string, y: string } = { x: 'someone', y: 'something' };

export var testFunction = function (name: string, address?: string, pinCode?: string): void {
    console.log(name + (address !== undefined ? address : '') + (pinCode !== undefined ? pinCode : ''));
}
console.log('ezmiez');
testFunction('valaki');