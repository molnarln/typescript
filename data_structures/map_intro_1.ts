let myMap = new Map<number, string>([
    [97, 'a'],
    [98, 'b'],
    [99, 'c'],
    [65, 'A'],
    [66, 'B'],
    [67, 'C']
]);
// Print all the keys
myMap.forEach((v, k, m) => console.log(k));
// Print all the values
myMap.forEach((v, k, m) => console.log(v));
// Add value D with the key 68
myMap.set(68, 'D');
// Print how many key-value pairs are in the map
console.log(myMap.size);
// Print the value that is associated with key 99
console.log(myMap.get(99));
// Remove the key-value pair where with key 97
myMap.delete(97);
// Print whether there is an associated value with key 100 or not
console.log(myMap.has(100));
// Remove all the key-value pairs
myMap.clear();