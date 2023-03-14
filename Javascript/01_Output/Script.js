let firstName = "Akhil";
let lastName = "Kandula";

/**
 * TODO :: console.log, console.warn & console.error
 */
console.log("Welcome to Javascript world");
console.warn(`My name is ${firstName} ${lastName}`);
console.error("How may I help you");

/**
 * TODO :: console.count & countreset
 */
console.log("First For Loop");
for (let index = 0; index < 10; index++) {
  console.count();
}

console.log("Second For Loop");
for (let index = 0; index < 10; index++) {
  console.count();
}

console.log("Third For Loop");
for (let index = 0; index < 10; index++) {
  console.count();
}
console.countReset();

console.log("Fourth For Loop");
for (let index = 0; index < 10; index++) {
  console.count();
}

/**
 * TODO :: Console.table
 */
studentDetails = {
  firstName: "Akhil",
  lastName: "Kandula",
  rollNumber: `15551A0535`,
};

console.table(studentDetails);

/**
 * TODO :: Console.assert
 */
let num = 20;
console.assert(num > 19, "Experssion return false");
