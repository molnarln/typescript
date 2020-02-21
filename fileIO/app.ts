import * as fs from 'fs';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

// fs.readFile('testfile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(0);
//     } else {
//         console.log(data.match(/\r?\n|\r/g).length + 1);
//     }
// });

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile(path: string): boolean {
    let returnValue: boolean = null;
    try {
        let data = fs.readFileSync(path, 'utf8');
        fs.writeFileSync(path + '_Masolata', data + '\nmásolat')
        returnValue = true;
        return returnValue;
    } catch (error) {
        console.log(error);
        return false;
    }
}

console.log(copyFile('testfile.txt'));