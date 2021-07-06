let calculator = {
    // ... your code ...
    read(){
        this.val1 = +prompt("val1?",1);
        this.val2 = +prompt("val2?",2);
    },
    sum(){
        return this.val1 + this.val2;
    },
    mul(){
        return this.val1 * this.val2;
    },
  };