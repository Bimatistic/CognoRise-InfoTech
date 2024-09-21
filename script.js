document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("addTaskButton").addEventListener("click", addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToList(task));
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { text: taskText, id: Date.now() };
        addTaskToList(task);
        saveTask(task);
        taskInput.value = "";
    }
}

function addTaskToList(task) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task.text}</span>
        <div>
            <button class="edit" onclick="editTask(${task.id})">Edit</button>
            <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    loadTasks();
}

function editTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find(task => task.id === id);
    const newTaskText = prompt("Edit task:", task.text);
    if (newTaskText !== null) {
        task.text = newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}
