function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  // Edit on click
  li.addEventListener("click", function () {
    let newText = prompt("Edit task:", li.innerText);
    if (newText !== null) {
      li.innerText = newText;
    }
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}