// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to create a new task element
function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete button to each task
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    // Add a click event to remove the task when the delete button is clicked
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    return li;
}

// Add task when the "Add" button is clicked
const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
