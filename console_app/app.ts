import * as readline from 'readline'

let a = 0;
let b = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Adja meg az első számot! ', (answer) => {
            console.log(`A megadott szám: ${answer}`)
            a = +answer;
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Adja meg a második számot! ', (answer) => {
            console.log(`A megadott szám: ${answer}`)
            b = +answer;
            resolve()
        })
    })
}

const main = async () => {
    await question1();
    await question2();
    rl.close();
    console.log(a + b);
}

main()