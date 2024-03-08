document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        addTaskFromInput();
      }
    });
  
    addTaskBtn.addEventListener("click", addTaskFromInput);
  
    function addTaskFromInput() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    }
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="tick-btn">&#10004;</span>
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(li);
      addDeleteListener(li.querySelector(".delete-btn"));
      addTickListener(li.querySelector(".tick-btn"));
    }
  
    function addDeleteListener(deleteBtn) {
      deleteBtn.addEventListener("click", function() {
        const listItem = this.parentNode;
        listItem.parentNode.removeChild(listItem);
      });
    }
  
    function addTickListener(tickBtn) {
      tickBtn.addEventListener("click", function() {
        const taskText = this.nextElementSibling;
        taskText.style.textDecoration = taskText.style.textDecoration === "line-through" ? "none" : "line-through";
      });
    }
  });
  