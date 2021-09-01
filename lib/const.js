
let obj = {}

function A() {
    return obj;
}

function B(){
    return obj;
}

function Show() {
    let a = new A;
    let b = new B;
    alert( a == b );
}

function Calculator() {

    this.read = function () {
        this.a = +prompt("Value1:",0);
        this.b = +prompt("Value2:",0);
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }
}

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("value?",0);
    }
}