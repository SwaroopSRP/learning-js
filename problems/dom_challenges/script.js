// 1. To change the text in <p> upon button clicking

/*
Simple way to do this: (as id is init as a JS var)
changeTextButton.addEventListener("click", function () {
    myParagraph.textContent = "Changed Text!";
});
*/

// More Classical Way
document.getElementById("changeTextButton").addEventListener(
    "click", () => {
        document.getElementById("changeTextButton").textContent
    });

// 2. DOM Traversal - Highlight 1st item in list upon button click
document.getElementById("highlightFirstCity")
    .addEventListener("click", () => {
        document.querySelector(".chai").className = "highlight";
        // Or, .classList.add("highlight");
    });

// 3. DOM Manip - Change div text upon button click
document.getElementById("changeOrder").addEventListener("click", () => {
    document.getElementById("coffeeType").textContent = "Espresso";
});

// 4. Insert elements
document.getElementById("shoppingList").innerHTML += "<li>Cookies</li>";
/* Or,
let elem = document.createElement("li");
elem.textContent = "Cookies";

document.getElementById("shoppingList").appendChild(elem);
 */

// 5. Remove DOM elements
document.getElementById("removeLastTask").addEventListener("click", () => {
    document.getElementById("taskList").lastElementChild.remove(); // Remove the last elem on click
})

// 6. Mouseover Event Listener
document.getElementById("clickMeButton")
    .addEventListener("mouseover", () => {
        alert("Mouseover triggered!");
    });

// 7. Event Delegation - Event listening over parent element
document.getElementById("teaList").addEventListener("click",
    function(event) {
       if (event.target &&  event.target.matches(".teaItem")) {
           alert("You clicked a tea item!");
       }
    });

// 8. Form Handling - Displaying the submitted data onto a separate element as output
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Common step to prevent refresh on click.
    let feedbackInp = document.getElementById("feedbackInput");
    console.log(feedbackInp); // Gives out the input tag and '?' in URL
    let fbVal = feedbackInp.value;
    let fbLabelTxt = document.querySelector(`label[for='feedbackInput']`).textContent; // Using CSS Selector (by attribute) to grab label from the for-id
    document.getElementById("feedbackDisplay")
        .textContent = `The value received for label("${fbLabelTxt}") is: ${fbVal}`;
});
// 9. DOM Content Load Status - Display message when DOM fully loaded
document.addEventListener("DOMContentLoaded", () => { // Targeting entire document
   document.getElementById("domStatus").textContent = "DOM fully loaded!"; 
});

// 10. Classes Manipulation - Toggle element styling upon events
document.getElementById("toggleHighlight").addEventListener("click", () => {
    document.getElementById("descriptionText").classList.toggle("highlight");
})
