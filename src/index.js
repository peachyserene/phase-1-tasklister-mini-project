document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.new - task - description.value);
  });

  //crates a P element with inner text of whatever the entered info was

  //add lsit item to ToDo Box
});

/*As a user, I should be able to type a task into the input field.
-As a user, I should be able to click some form of a submit button.
-As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated
-A delete function that will remove tasks from your list
-A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
-As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
-An additional input field (e.g. user, duration, date due)
-Ability to edit tasks
-Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

step 1: make an event listener for DOMContentLoaded. Everything else goes inside its function
step 2:grab the element from the HTML that you want to give functionality
step 3:chain event listener for "submit" (because this is a form it takes a "submit" instead of a click)
step 4: remove the default action with preventDefault




*/
