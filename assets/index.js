const todoList = document.getElementById("list");
const button = document.getElementById("add-button");
const input = document.querySelector(".input-todo");

// Need to add checkbox
button.addEventListener("click", () => {
  if (input.value !== "") {
    const list = document.createElement("li");
    list.textContent = input.value;
    todoList.appendChild(list);
    input.value = "";
  } else {
    alert("Please enter some task");
  }
});

list.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (clickedItem.style.textDecoration === "none") {
    clickedItem.style.textDecoration = "line-through";
  } else {
    clickedItem.style.textDecoration = "none";
  }
});
