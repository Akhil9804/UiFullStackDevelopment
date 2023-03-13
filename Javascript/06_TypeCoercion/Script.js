/**
 * TODO :: String Conversion
 */
let str = "hello";
console.log(`Value and type of str :: ${str} ${typeof str}`);
let bool = true;
console.log(`Value and type of bool :: ${bool} ${typeof bool}`);
let result = str + bool;
console.log(`Value and type of result :: ${result} ${typeof result}`);

let nullValue = null;
console.log(`Value and type of nullValue :: ${nullValue} ${typeof nullValue}`);
result = str + nullValue;
console.log(`Value and type of result :: ${result} ${typeof result}`);

let undefinedValue;
console.log(
  `Value and type of undefinedValue :: ${undefinedValue} ${typeof undefinedValue}`
);
result = str + undefinedValue;
console.log(`Value and type of result :: ${result} ${typeof result}`);

let num = 10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
result = str + num;
console.log(`Value and type of result :: ${result} ${typeof result}`);
console.log();

/**
 * TODO :: Numeric Conversion
 */
num = 10;
console.log(`Value and type of num :: ${num} ${typeof num}`);
str = "20";
console.log(`Value and type of str :: ${str} ${typeof str}`);
result = str - num;
console.log(`Value and type of result :: ${result} ${typeof result}`);
