/*
Task 1: Bind the Correct Context
Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
*/
const person = {
    name: "Alice",
    introduce: function () {
        return `Hi, my name is ${this.name}`;
    }
};
let boundIntroduce = person.introduce.bind(person);


/*
Task 2: Using call() to Invoke a Function with Different Contexts
Write a function introduce() that uses the this keyword to introduce a person by name.
Then, invoke introduce() using call() to introduce different people with the same function.
*/
function introduce() {
    return `I'm ${this.name}.`;
}

const p1 = { name: "Swaroop" };
const p2 = { name: "Qwen" };
introduce.call(p1); // Call gives context along with ability to pass args (not in array form)
introduce.call(p2);


/*
Task 3: Using apply() to Pass Arguments with Context
Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(),
passing the numbers as an array.
*/
function sum(a, b) {
    return (a + b) * this.multiplier;
}

const c1 = { multiplier: 2 };
const c2 = { multiplier: 3 };

sum.apply(c1, [5, 10]); // Apply also gives context, but with args in array form
sum.apply(c2, [5, 10]);
