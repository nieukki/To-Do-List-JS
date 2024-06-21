const addNewTaskButton = document.querySelector("#add-new-task");
const taskSection = document.querySelector("#tasks-section");
const taskInput = document.querySelector("#task-input");
const captionWhenEmpty = document.querySelector("#caption");

let listOfTasks = [];

const checkIfEmpty = () => {
  if (listOfTasks.length > 0) {
    captionWhenEmpty.classList.add("block");
  } else {
    captionWhenEmpty.classList.remove("block");
    captionWhenEmpty.classList.add("hidden");
  }
};

const saveNewTask = () => {
  let item = taskInput.value;

  let object = {
    task: item,
    completed: false,
  };

  listOfTasks.push(object);
  localStorage.setItem("tasksData", JSON.stringify(listOfTasks));
};

const renderTasks = () => {
  taskSection.innerHTML = "";

  listOfTasks.forEach((element, index) => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const input = document.createElement("input");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");

    div1.setAttribute("class", "div1-style-class");
    div1.setAttribute("id", `${index}`);
    div2.setAttribute("class", "div2-style-class");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = element.completed;
    deleteButton.setAttribute(
      "class",
      "delete-button-style-class fa-solid fa-trash-can"
    );

    deleteButton.addEventListener("click", () => {
      listOfTasks = listOfTasks.filter((_, i) => {
        return i != index;
      });
      localStorage.setItem("tasksData", JSON.stringify(listOfTasks));
      renderTasks();
    });

    checkbox.addEventListener("change", (e) => {
      const completed = checkbox.checked;
      listOfTasks = listOfTasks.map((element, i) => {
        if (i === index) {
          return { ...element, completed: completed };
        } else {
          return element;
        }
      });

      localStorage.setItem("tasksData", JSON.stringify(listOfTasks));
      renderTasks();
    });

    input.setAttribute("disabled", "true");
    input.setAttribute("class", element.completed ? "line-through" : "");
    input.value = element.task;

    div2.appendChild(deleteButton);
    div1.appendChild(checkbox);
    div1.appendChild(input);
    div1.appendChild(div2);
    taskSection.appendChild(div1);
  });
};

taskInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && taskInput.value != "") {
    saveNewTask();
    renderTasks();
    taskInput.value = "";
  }
});

addNewTaskButton.addEventListener("click", (e) => {
  if (taskInput.value != "") {
    saveNewTask();
    renderTasks();
    taskInput.value = "";
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  listOfTasks = JSON.parse(localStorage.getItem("tasksData")) ?? [];
  renderTasks();
});
