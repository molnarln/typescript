let john = { 
    valami: 'elso', 
    masodik: 'masodik', 
    functionOfJohn: () => { console.log('hurrá') } 
};
type pista = {
    firstProp?: number,
    secondProp: string
};

john.functionOfJohn();

let b: pista = {
    secondProp : 'b property'
};
console.log(b.secondProp);
console.log(b['secondProp']);
b['secondProp'] = 'lolololllll';
console.log(b.secondProp);
b['thirdProperty'] = 'asdfasfd';
console.log(b['thirdProperty']);
console.log(Object.keys(b));
console.log(Object.values(b));

