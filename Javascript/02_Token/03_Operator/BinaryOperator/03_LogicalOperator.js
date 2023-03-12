/**
 * TODO :: And Operator
 */
let bool1 = true;
let bool2 = true;
console.log(`${bool1} && ${bool2} = ${bool1 && bool2}`);
bool2 = false;
console.log(`${bool1} && ${bool2} = ${bool1 && bool2}`);
bool1 = false;
bool2 = true;
console.log(`${bool1} && ${bool2} = ${bool1 && bool2}`);
bool1 = false;
bool2 = false;
console.log(`${bool1} && ${bool2} = ${bool1 && bool2}`);

/**
 * TODO :: Or Operator
 */
bool1 = true;
bool2 = true;
console.log(`${bool1} || ${bool2} = ${bool1 || bool2}`);
bool2 = false;
console.log(`${bool1} || ${bool2} = ${bool1 || bool2}`);
bool1 = false;
bool2 = true;
console.log(`${bool1} || ${bool2} = ${bool1 || bool2}`);
bool1 = false;
bool2 = false;
console.log(`${bool1} || ${bool2} = ${bool1 || bool2}`);

/**
 * TODO :: Not Operator
 */
num1 = true;
console.log(`!{num1} :: ${!num1}`);
num1 = false;
console.log(`!{num1} :: ${!num1}`);
