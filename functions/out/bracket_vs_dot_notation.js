let john = {
    valami: 'elso',
    masodik: 'masodik',
    functionOfJohn: () => { console.log('hurrá'); }
};
john.functionOfJohn();
let b = {
    secondProp: 'b property'
};
console.log(b.secondProp);
b['secondProp'] = 'lolololllll';
console.log(b.secondProp);
b['thirdProperty'] = 'asdfasfd';
console.log(b['thirdProperty']);
console.log(Object.keys(b));
//# sourceMappingURL=bracket_vs_dot_notation.js.map