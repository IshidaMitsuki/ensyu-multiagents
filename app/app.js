const STORAGE_KEY = "lab-task-board-v1";
const statusLabels = {
  todo: "未着手",
  doing: "進行中",
  done: "完了",
};

const taskInput = document.querySelector("#taskInput");
const statusInput = document.querySelector("#statusInput");
const addButton = document.querySelector("#addButton");
const summary = document.querySelector("#summary");
const template = document.querySelector("#taskTemplate");

const lists = {
  todo: document.querySelector("#todoList"),
  doing: document.querySelector("#doingList"),
  done: document.querySelector("#doneList"),
};

let tasks = loadTasks();

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

render();

function addTask() {
  const title = taskInput.value.trim();
  if (!title) {
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    status: statusInput.value,
    createdAt: new Date().toISOString(),
  });

  taskInput.value = "";
  statusInput.value = "todo";
  saveTasks();
  render();
  taskInput.focus();
}

function render() {
  Object.values(lists).forEach((list) => {
    list.innerHTML = "";
  });

  tasks.forEach((task) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const title = node.querySelector(".task-title");
    const status = node.querySelector(".task-status");
    const deleteButton = node.querySelector(".delete-button");

    title.textContent = task.title;
    status.value = task.status;

    status.addEventListener("change", () => {
      updateTaskStatus(task.id, status.value);
    });

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    lists[task.status].appendChild(node);
  });

  renderEmptyStates();
  renderSummary();
}

function renderEmptyStates() {
  Object.entries(lists).forEach(([status, list]) => {
    if (list.children.length > 0) {
      return;
    }

    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = `${statusLabels[status]}のタスクはありません`;
    list.appendChild(empty);
  });
}

function renderSummary() {
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === "done").length;
  summary.textContent = `${total}件のタスク / 完了 ${done}件`;
}

function updateTaskStatus(id, status) {
  tasks = tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }
    return { ...task, status };
  });
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  render();
}

function loadTasks() {
  const rawTasks = localStorage.getItem(STORAGE_KEY);
  if (!rawTasks) {
    return [
      {
        id: crypto.randomUUID(),
        title: "研究テーマの問いを1文で書く",
        status: "todo",
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        title: "関連研究を3本メモする",
        status: "doing",
        createdAt: new Date().toISOString(),
      },
    ];
  }

  try {
    const parsed = JSON.parse(rawTasks);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(isValidTask);
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function isValidTask(task) {
  return (
    task &&
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    Object.hasOwn(statusLabels, task.status)
  );
}

