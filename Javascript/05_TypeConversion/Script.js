console.log("Convert String to Number");
let str = "10";
console.log(`Value and type of str :: ${str} ${typeof str}`);
let num = Number(str);
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = "Akhil";
console.log(`Value and type of str :: ${str} ${typeof str}`);
num = Number(str);
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = "NaN";
console.log(`Value and type of str :: ${str} ${typeof str}`);
num = Number(str);
console.log(`Value and type of num :: ${num} ${typeof num}`);
console.log();

console.log("Convert Boolean to Number");
let bool = true;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = Number(bool);
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = false;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = Number(bool);
console.log(`Value and type of num :: ${num} ${typeof num}`);
console.log();

console.log("Convert Number to String");
num = 10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = String(num);
console.log(`Value and type of str :: ${str} ${typeof str}`);
num = -10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = String(num);
console.log(`Value and type of str :: ${str} ${typeof str}`);
num = 10.67;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = String(num);
console.log(`Value and type of str :: ${str} ${typeof str}`);
console.log();

console.log("Convert Boolean to String");
bool = true;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = String(bool);
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = false;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = String(bool);
console.log(`Value and type of str :: ${str} ${typeof str}`);
console.log();
