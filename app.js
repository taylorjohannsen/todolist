const objArray = [];
let x = 0;

class TodoSetup {
  constructor(projName, parent, title, body, priority, id) {
    this.body = body;
    this.parent = parent;
    this.title = title;
    this.priority = priority;
    this.container = document.createElement("div");
    this.id = id;
    this.projName = projName;
    this.titleRender();
  }

  titleRender() {
    const objName = document.querySelector("#projList");
    objName.innerText = "";
    objName.innerText = this.projName;
  }
}

document.querySelector("#Submit").addEventListener("click", () => {
  let todoTitle = document.getElementById("title").value;
  let checkBox = document.getElementById("checked");
  let isChecked = checkBox.checked;
  let todoBody = document.getElementById("body").value;
  let projectName = document.querySelector("#newName").value;

  objArray.push(
    new TodoSetup(
      projectName,
      document.querySelector("#testTask"),
      todoTitle,
      todoBody,
      isChecked,
      x
    )
  );
  render();

  x++;
  document.getElementById("title").value = "";
  document.getElementById("body").value = "";
  document.getElementById("newName").style.display = "none";
  document.querySelector(".mainForm").style.display = "flex";
  document.querySelector("#titleChange").style.display = "flex";
  checkBox.checked = false;
});

function render() {
  objArray.forEach(object => {
    object.container.innerText = "";

    const objContainer = document.createElement("div");
    const objTitle = document.createElement("div");
    objTitle.innerText = object.title;

    const objDescription = document.createElement("div");
    objDescription.innerText = object.body;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteInfo(object.id);
    });

    if (object.priority == true) {
      objContainer.style.background = "lightgreen";
    }

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      editForm.style.display = "block";
      editInfo(object.id);
    });

    objContainer.appendChild(objTitle);
    objContainer.appendChild(objDescription);
    objContainer.appendChild(editButton);
    objContainer.appendChild(deleteButton);

    object.container.appendChild(objContainer);
    object.parent.appendChild(object.container);
  });
}

function editInfo(idNumber) {
  const editTodo = objArray.find(function(todo) {
    return todo.id === idNumber;
  });

  const editParent = document.querySelector("#editForm");

  const editTitle = document.createElement("input");
  editTitle.type = "text";
  editTitle.placeholder = "Edit Title";

  const editBody = document.createElement("input");
  editBody.type = "text";
  editBody.placeholder = "Edit Body";

  const editPriority = document.createElement("input");
  editPriority.type = "checkbox";

  const subButton = document.createElement("button");
  subButton.innerText = "Submit";

  editParent.appendChild(editTitle);
  editParent.appendChild(editBody);
  editParent.appendChild(editPriority);
  editParent.appendChild(subButton);

  subButton.addEventListener("click", () => {
    editTodo.title = editTitle.value;
    editTodo.body = editBody.value;
    editTodo.priority = editPriority.checked;

    render();
    editForm.style.display = "none";
    editParent.innerHTML = "";
  });
}

function deleteInfo(newNumber) {
  const editTodo = objArray.find(function(todo) {
    return todo.id === newNumber;
  });

  editTodo.container.remove();
  objArray.splice(objArray.indexOf(editTodo), 1);
  render();
}

function editTitle() {
  document.getElementById("newName").style.display = "flex";
}
