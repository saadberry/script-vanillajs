// script to create a new button on clicking of a button

// creating a new button
var button = document.createElement("button");
button.innerHTML="button"
button.classList.add("btn")
document.body.appendChild(button);

// function to create a new button
function createButton() {

  // creating a new button
  var new_btn = document.createElement("button");
  new_btn.innerHTML = "new button";
  
  // assigning it the class name "btn"
  new_btn.classList.add("btn")
  
  // adding it to document body
  document.body.appendChild(new_btn);

}

// Adding an event listener for when the button is clicked
document.addEventListener("click", function(event){
  
  // finding the button with class name "btn"
  if (event.target.classList.contains("btn")){
    var button = document.querySelector(".btn")
    
    // modifying its class name
    button.classList.remove("btn")
    button.classList.add("prev-btn");

    // disabling clicking on the button
    button.disabled = true;

    // calling createButton() function
    createButton();
  }
})