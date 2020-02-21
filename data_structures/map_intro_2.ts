let myMap2 = new Map<string, string>([
    ['978-1-60309-452-8', 'A Letter to Jo'],
    ['978-1-60309-459-7', 'Lupus'],
    ['978-1-60309-444-3', 'Red Panda and Moon Bear'],
    ['978-1-60309-461-0', 'The Lab']
]);
// Print all the key-value pairs in the following format
// myMap2.forEach((v, k, m) => console.log(`${v} (ISBN: ${k})`));

function getKeyByValue(map: Map<string, string>, value: string): string {
    let returnValue = '';
    // Ez az egysoros megoldás is működik:
    // return [...map].find(([key, val]) => val === value)[0];
    for (const [k, v] of map.entries()) {
        if (v === value) {
            returnValue = k;
        }
    }
    return returnValue;
}
let output = getKeyByValue(myMap2, 'The Lab');
console.log(output);
