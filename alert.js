let num = prompt("Enter a number:",10);
let flug

next:
for(let i = 2; i <= num; i++ ){

    flug = true;
    for(let j = 2; j < i; j++ ){
        if(i%j == 0){
            //素数ではない
            continue next;
        }
    }
    alert(`${i}`);
}