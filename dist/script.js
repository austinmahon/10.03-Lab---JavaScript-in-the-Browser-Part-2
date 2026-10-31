window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Register addBtnClick() as the Add button's click event handler
   const addBtn = document.getElementById("add-btn");
   addBtn.addEventListener("click", addBtnClick);

   // Add a keyup event handler for the textbox
   const taskInput = document.getElementById("task-input");
   taskInput.addEventListener("keyup", function(event) {
      // Call addBtnClick() if event.key is "Enter"
      if (event.key === "Enter") {
         addBtnClick();
      }
   });

   // Attach removeTask to the initial task buttons already in the HTML
   const initialButtons = document.querySelectorAll(".done-btn");
   initialButtons.forEach(button => {
      button.addEventListener("click", removeTask);
   });
}

function addBtnClick() {
   const taskInput = document.getElementById("task-input");
   const taskText = taskInput.value.trim();

   // Prevent empty tasks from being added
   if (taskText !== "") {
      addTask(taskText);
   }

   // Clear the textbox value and put focus back
   taskInput.value = "";
   taskInput.focus();
}

function addTask(task) {
   // Create a new <li> element and set its innerHTML
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   // Call document.querySelector() to find the <ol> DOM node and append the <li>
   const ol = document.querySelector("ol");
   ol.appendChild(li);

   // Search the DOM for all buttons that use the done-btn class
   const doneButtons = document.querySelectorAll(".done-btn");
   const lastDoneBtn = doneButtons[doneButtons.length - 1];
   
   // Register removeTask() as the last done button's event handler
   lastDoneBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
   // Assign a variable with the parentNode (the <li> element)
   const li = event.target.parentNode;
   
   // Call removeChild() on the <ol> element (the <li> element's parent node)
   li.parentNode.removeChild(li);
}