/**
 * TODO :: Convert String to Number
 */
let str = "10";
console.log(`Value and type of str :: ${str} ${typeof str}`);
let num = Number(str);
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = "Akhil";
console.log(`Value and type of str :: ${str} ${typeof str}`);
num = Number(str);
console.log(`Value and type of num :: ${num} ${typeof num}`);
let nullValue = "null";
console.log(`Value and type of nullValue :: ${nullValue} ${typeof nullValue}`);
num = Number(nullValue);
console.log(`Value and type of num :: ${num} ${typeof num}`);
let undefinedValue;

/**
 * TODO :: Convert Boolean to Number
 */
let bool = true;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = Number(bool);
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = false;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = Number(bool);
console.log(`Value and type of num :: ${num} ${typeof num}`);

/**
 * TODO :: Convert Number to String
 */
num = 10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = String(num);
console.log(`Value and type of str :: ${str} ${typeof str}`);

/**
 * TODO :: Convert Boolean to String
 */
bool = true;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = String(bool);
console.log(`Value and type of str :: ${str} ${typeof str}`);
