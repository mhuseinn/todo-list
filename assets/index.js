const todoList = document.getElementById("list");
const button = document.getElementById("add-button");
const input = document.querySelector(".input-todo");

// Click Button to make the li element
button.addEventListener("click", () => {
  if (input.value !== "") {
    const list = document.createElement("li");
    list.textContent = input.value;
    list.style.backgroundColor = "transparent";

    const checked = document.createElement("input");
    checked.type = "checkbox";
    checked.id = "checkbox";
    checked.name = "checkbox";

    list.appendChild(checked);
    todoList.appendChild(list);

    input.value = "";

    checked.addEventListener("change", () => {
      if (checked.checked === true) {
        list.remove();
      } else {
        return false;
      }
    });
  } else {
    alert("Please enter some task");
  }
});

// Click tasks to mark as done
list.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (clickedItem.style.backgroundColor === "transparent") {
    clickedItem.style.backgroundColor = "#CADABF";
    clickedItem.style.fontWeight = "bold";
  } else {
    clickedItem.style.backgroundColor = "transparent";
    clickedItem.style.fontWeight = "normal";
  }
});

// Press Enter to Add Tasks
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  } else {
    return false;
  }
});
