'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable
let out = '';
let notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let hashmap = {
    7: 'run around and desert you',
    50: 'tell a lie and hurt you ',
    49: 'make you cry, ',
    2: 'let you down',
    12: 'give you up, ',
    1: 'Never gonna ',
    11: '\n',
    3: 'say goodbye '
};
function decode(map, numberArray) {
    let output = '';
    for (const item of notSoCrypticMessage) {
        output += hashmap[item];
    }
    return output;
}
out = decode(hashmap, notSoCrypticMessage);
console.log(out);
//# sourceMappingURL=he_will_never.js.map