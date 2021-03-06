const todoForm = document.querySelector('.todo_form'),
      todoValue = todoForm.querySelector('input'),
      todoList = document.querySelector('.js-todoList'),
      TODOS_LS = 'todos';

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function delTodos(event){
    const target = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodos = todos.filter(t => t.id !== li.id);
    todos = cleanTodos;
    saveTodos();
}
    
function showTodo(value){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', delTodos);
    delBtn.innerHTML = '😿';
    
    const span = document.createElement('span');
    span.innerText = value;
    const newId = todos.length + 1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj = {
        text: value,
        id: newId
    };
    todos.push(todoObj);
    saveTodos();
}

function createTodo(event){
    event.preventDefault();
    showTodo(todoValue.value);
    todoValue.value = "";
}

function todo(){
    const loadTodos = localStorage.getItem(TODOS_LS);
    todoForm.addEventListener('submit', createTodo);
    todoForm.classList.add('showing');

    todoValue.style.background = 'none';
    todoValue.style.border = 'none';
    todoValue.style.borderBottom = '2px solid pink';
}

todo();