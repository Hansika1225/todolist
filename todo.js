const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("add-button");
const todoList  = document.getElementById("todo-list");


addButton.addEventListener("click" , function() {
      const todoText = todoInput.value.trim();
      console.log(todoText)
      const li = document.createElement('li');
      li.textContent = todoText;
      todoList.appendChild(li);
      todoInput.value = empty;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      todoList.appendChild(deleteButton);
      deleteButton.addEventListener("click" , function() {
               todoList.removeChild(li);
               todoList.removeChild(deleteButton);
      });
       
});