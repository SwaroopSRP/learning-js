/*
Task 1: Creating a Counter Using Closures
Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
*/
function createCounter() {
    let ctr = 1;
    return () => {
        return ctr++;
    };
}

/*
Task 2: Rate Limiter Function
Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds.
If it is called again before the limit is reached, it should return "Rate limit exceeded".
*/
function rateLimiter(fn, limit) {
    let lastCalled = 0;
    return (...args) => {
        if (Date.now() - lastCalled >= limit) { // Compare by diff between absolute time in day and last_time
            lastCalled = Date.now();
            return fn(...args); // Pass as unpacked
        } else {
            return "Rate limit exceeded";
        }
    };
}

/*
Task 3: Memoization Function
Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls,
and return the cached result if the same inputs are provided again.
*/
function memoize(fn) {
    let cache = {};
    
    return (...args) => {
        const key = JSON.stringify(args); // Merge all the exact args as one key
        
        if (cache[key]) {
            console.log("Fetching from cache...");
            return cache[key];
        } else {
            console.log("Computing and caching...");
            const val = fn(...args);
            cache[key] = val;
            return val;
        }
    };
}
