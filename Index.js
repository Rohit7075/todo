document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;

        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });

        todoList.appendChild(todoItem);
    }
});