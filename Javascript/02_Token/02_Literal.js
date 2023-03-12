// Integer Literal
let num1 = 10;
let num2 = -20;
console.log(`Value and type of num1 :: ${num1} ${typeof num1}`);
console.warn(`Value and type of num2 :: ${num2} ${typeof num2}`);

// Float Literal
let num3 = 10.89;
console.error(`Value and type of num3 :: ${num3} ${typeof num3}`);

// String Literal
let char = "a";
console.log(`Value and type of char :: ${char} ${typeof char}`);
let str = "Akhil Kandula";
console.warn(`Value and type of str :: ${str} ${typeof str}`);

// Boolean Literal
let isBooleanValue = true;
console.error(
  `Value and type isBoolean :: ${isBooleanValue} ${typeof isBooleanValue}`
);

// Array Literal
let arr1 = [10, 20, 30];
console.log(`Value and type of arr1 :: ${arr1} ${typeof arr1}`);
let arr2 = new Array(10, "Akhil", 10.56);
console.warn(`Value and type of arr2 :: ${arr2} ${typeof arr2}`);

//Object Literal
let obj = {
  num1: 10,
  num2: 20,
  addValue: function () {
    return this.num1 + this.num2;
  },
};

console.error(`Value and type of obj :: ${obj} ${typeof obj}`);
