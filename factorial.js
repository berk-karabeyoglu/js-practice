//* Iteratively Factorial Function
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

//* Recursively Factorial Function

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));

//* Recursively Power Function

function power(base, pow) {
  if (pow === 0) return 1;

  return base * power(base, pow - 1);
}

console.log(power(2, 8));
