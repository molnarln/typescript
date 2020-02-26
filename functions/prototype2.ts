var foo2 = function (name) {
    this.myName = name;
    this.tellMyName = function () {
        console.log(this.myName);
    }
}
var fooObj1 = new foo2('James');
fooObj1.tellMyName(); // will print James
var fooObj2 = new foo2('Mike');
fooObj2.tellMyName(); // will print Mike
