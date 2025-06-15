/*
Task 1: Creating a Simple Generator
Create a generator function numberGenerator() that yields numbers from 1 to 3.
*/
function* numberGenerator() {
    for (let i = 1; i <= 3; i++) {
        yield i;
    }
}


/*
Task 2: Create a Custom Iterator
Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
Each call to .next() should return the next number in the range until it reaches end.
*/
function rangeIterator(start, end) {
    let curr = start;
    return {
        next: function() {
            if (curr <= end) {
                return { value: curr++, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}


/*
Task 3: Generator Function for Fibonacci Sequence
Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).
Use the next() method to get the next Fibonacci number.
*/
function* fibonacciGenerator() {
    let n1 = 1, n2 = 1;

    while(true) {
        yield n1;
        [n1, n2] = [n2, n1 + n2];
    }
}
