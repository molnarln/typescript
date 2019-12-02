function setup() {
  createCanvas(640, 480);
  background(0);
  let button = createButton('press');
  button.mousePressed(() => background(random(255)));
}
console.log("na ez egy király kis teszt lesz");


// var youLikeMeat = true;
// var myNum = 8;

// if (myNum === 10) {
//     document.write("myNum is equal to 10.");
// } else {
//     document.write("myNum is not equal to 10.")
// }
