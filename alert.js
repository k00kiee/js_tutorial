let x = prompt("x?:",2);
let y = prompt("n?:",3);
alert(pow(x, y));

function pow(x, n){
    let ret_val = x;
    for(let i = 1; i < n; i++){
        ret_val *= x;
    }
    return ret_val;
}