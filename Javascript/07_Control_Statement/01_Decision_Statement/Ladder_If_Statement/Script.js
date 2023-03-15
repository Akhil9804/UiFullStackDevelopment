let num = parseInt(prompt("Enter num value"));
if (num > 0) {
  console.log(`${num} is Positive Integer`);
} else if (num < 0) {
  console.warn(`${num} is Negative Integer`);
} else {
  console.error(`num is zero`);
}
