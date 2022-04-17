document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  });
});

function buildToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = " Delete ";
  p.textContent = `- ${todo}   `;
  p.appendChild(btn);
  document.querySelector("#list").appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
/*
-A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
-As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
-An additional input field (e.g. user, duration, date due)
-Ability to edit tasks
-Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM (maybe dont add an empty todo item)

step 1: make an event listener for DOMContentLoaded. Everything else goes inside its function
step 2:grab the element from the HTML that you want to give functionality
step 3:chain event listener for "submit" (because this is a form it takes a "submit" instead of a click)
step 4: remove the default action with preventDefault
step 5: target the input using the input ID with e.target.targetName.value . If the ID name is kebab-case use ["target-name"]

step 6: crate a new function that manages what to do with the new entry
step 7: add a new <p> element using document.createElement(" ") and assign it to a variable name i.e. "p"
step 8: grab the the HTML element we want to attach the new <p> to. Append p using appendChild(). *(for some reason, this did not work with getElementById, but it did with querySelector)

step 9: to add a delete button after the added task create a "button" element with .createElement() like we did with <p>
step 10: give the button some body with .textContent
step 11: append the the button to the p element

step 12: adding interpolation to the paramater being passed through this function can give each entered item some space around it

step 13: add an event listener to the button and crate a new fucntion to handle the delete process
step 14: this function will remove -> the parentNode -> of the target -> in the event
step 15: inside the event lsitener for the form adding .reset() will clear the field
*/

if value of the submit is === "" then event.stopPropagation(); else (all that other crap)