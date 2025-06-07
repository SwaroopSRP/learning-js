// HTML Collections:-
// Optional conversion to array. Supports all array methods in modern browser versions.

let elems = document.getElementsByTagName("h1"); // Gives HTMLCollection of [h1] - array-like

console.log(elems.length); // No. of h1 found in the page

let target = elems[0]; // Gives the first h1 element found

console.log(target.textContent); // Can now access normally

// Can also iterate over it:
for (let i = 0; i < elems.length; i++) {
    if (i.classList.contains("title")) {
        console.log("The title is " + i.textContent);
        break;
    }
}
// Or
for (let i of Array.from(elems)) {
    if (i.classList.contains("title")) {
        console.log("The title is " + i.textContent);
        break;
    }
}


// NodeLists :-  (More static, snapshot-like)
// For array-like iteration, conversion to Array is mandatory.

let divs = document.querySelector("div");

for (let node of divs.childNodes) {
    if (node.nodeType === 1) {
        console.log("Element node:", node.tagName);
    } else if (node.nodeType === 3) {
        console.log("Text node:", `"${node.textContent.trim()}"`);
    } else if (node.nodeType === 8) {
        console.log("Comment node:", node.textContent);
    }
}
