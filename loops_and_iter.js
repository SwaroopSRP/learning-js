// Traditional Loops (5 types)

// While Loop
let x = 1;
while(x <= 10) {
    process.stdout.write(x + " ");
    x++;
}

console.log();

// Do...While Loop
x = 1;
do {
    process.stdout.write(x + " ");
    x++;
} while(x <= 10);

console.log();

// For Loop
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " ");
}

console.log();

// For...in Loop
x = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10 };
for (let i in x) {
    console.log(`${i} --> ${x[i]}`);
}

x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i in x) {
    process.stdout.write(x[i] + " ");
}

console.log();

// For...of Loop
for (let i of x) {
    process.stdout.write(i + " ");
}

console.log();


// Array Iterations (can't skip, terminate or return in between), Few:

// Array.forEach()

/*
array.forEach(function(currentValue, index, array) {
  // Your code here
}, thisArg);

Parameters:
    currentValue – the current element being processed.
    index (optional) – the index of the current element.
    array (optional) – the array forEach() was called upon.
    thisArg (optional) – value to use as this when executing the callback.
*/

x.forEach(val => {
    process.stdout.write(val + " ");
});

console.log();

x.forEach((val, idx) => {
    console.log(`At ${idx} --> ${val}`);
})


// Array.map()

/*
array.map((element, index, array) => {
  // return transformed element
});
 */

x = x.map(i => i / 10);

x.map((val) => {
    process.stdout.write(val + " ");
});

console.log();

// Array.filter()

/*
array.filter((element, index, array) => {
  return condition; // true to keep, false to skip
});
 */

let even = x.filter(x => x % 2 === 0);
console.log(even);

// Array.reduce()

/*
array.reduce((accumulator, currentValue, index, array) => {
  // logic here
}, initialValue);
 */

let evenSum = x.reduce((acc, elem) => acc + elem);
console.log(evenSum);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);

const max = [10, 5, 8, 20].reduce((acc, val) => val > acc ? val : acc);
console.log(max); // 20
