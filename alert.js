let user = new Object();
user = {
    name:"john",
    surname:"Smith",
}

user[name] = "Pete";
alert(user[name]);

delete user[name];
alert(user[name]);