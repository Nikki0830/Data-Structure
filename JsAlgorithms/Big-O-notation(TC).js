//The worst case of an algorithm represents using Big-O notation
// let num = [4]
// let num2 = 4
// console.log(num.length)
function Summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    // sum =+ i; 4
    // sum = ++i

    sum += i;
  }
  return sum;
}
console.log(Summation(4));

// ++i ,i++

// let x = 5

// let result1 = ++x
// console.log(`result1 ${result1}`)

// let result2 = x++
// console.log(`result2 ${result2}`)
let x = 5;
let y = 4

const result1 = --x; // x becomes 6, result1 is 6 (new value)
console.log("result1:", result1); // Output: result1: 6

const result2 = y++; // x becomes 6, result2 is 5 (original value)
console.log("result2:", result2); // Output: result2: 5

console.log("x:", x); // Output: x: 6 (both operations have now incremented x to 6)
console.log("y:", y); // Output: x: 6 (both operations have now incremented x to 6)

