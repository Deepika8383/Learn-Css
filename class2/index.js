const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Create task elements
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleComplete);

  const span = document.createElement('span');
  span.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.addEventListener('click', editTask);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', deleteTask);

  li.append(checkbox, span, editBtn, deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}

// Mark task complete
function toggleComplete(e) {
  const li = e.target.parentElement;
  li.classList.toggle('completed');
}

// Edit task
function editTask(e) {
  const li = e.target.parentElement;
  const span = li.querySelector('span');
  const newText = prompt('Edit your task:', span.textContent);
  if (newText) span.textContent = newText;
}

// Delete task
function deleteTask(e) {
  e.target.parentElement.remove();
}
