var num = parseInt(prompt("Enter the Number"));
if (num > 0) {
  console.log(`${num} is positive integer`);
  if (num % 2 == 0) {
    console.warn(`${num} is even number`);
  } else {
    console.error(`${num} is odd number`);
  }
} else if (num < 0) {
  console.log(`${num} is Negative integer`);
  if (num % 2 == 0) {
    console.warn(`${num} is even number`);
  } else {
    console.error(`${num} is odd number`);
  }
} else {
  console.log("num is zero");
}
