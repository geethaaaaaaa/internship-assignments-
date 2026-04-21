// Model (data)
let tasks = [];

// View + Controller combined
const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(li);
    });
}

// Controller
function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value.trim();

    if (value === "") {
        alert("Task cannot be empty");
        return;
    }

    tasks.push(value);
    input.value = "";

    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}