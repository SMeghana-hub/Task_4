let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const desc = document.getElementById("taskInput").value.trim();
  const date = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;
  if (!desc) return;
  tasks.push({ desc, date, priority });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `📌 ${task.desc}<br>📅 Due: ${task.date || 'N/A'}<br>⚠️ Priority: ${task.priority} <button onclick="deleteTask(${index})">❌</button>`;
    list.appendChild(li);
  });
}

displayTasks();
