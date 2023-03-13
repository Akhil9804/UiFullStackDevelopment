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
num = NaN;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = String(num);
console.log(`Value and type of str :: ${str} ${typeof str}`);
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

console.log("Convert Number to Boolean");
num = 1;
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = Boolean(num);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = 10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = Boolean(num);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = 0;
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = Boolean(num);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
num = NaN;
console.log(`Value and type of num :: ${num} ${typeof num}`);
bool = Boolean(num);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
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

console.log(`Convert String to Boolean`);
str = "Akhil";
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = Boolean(str);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = "10";
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = Boolean(str);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = "0";
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = Boolean(str);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = " ";
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = Boolean(str);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
str = "";
console.log(`Value and type of str :: ${str} ${typeof str}`);
bool = Boolean(str);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
console.log();

console.log(`Convert Null, Undefined to String`);
let nullValue = null;
console.log(`Value and type of nullValue :: ${nullValue} ${typeof nullValue}`);
str = String(nullValue);
console.log(`Value and type of str :: ${str} ${typeof str}`);
let unDefinedValue;
console.log(
  `Value and type of unDefinedValue :: ${unDefinedValue} ${typeof unDefinedValue}`
);
str = String(unDefinedValue);
console.log(`Value and type of str :: ${str} ${typeof str}`);
console.log();

console.log(`Convert Null, Undefined to Boolean`);
nullValue = null;
console.log(`Value and type of nullValue :: ${nullValue} ${typeof nullValue}`);
bool = Boolean(nullValue);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
unDefinedValue;
console.log(
  `Value and type of unDefinedValue :: ${unDefinedValue} ${typeof unDefinedValue}`
);
bool = Boolean(unDefinedValue);
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
console.log();

// Falsy Value = 0,"",null,undefined,NaN
