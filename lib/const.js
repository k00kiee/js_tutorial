
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
