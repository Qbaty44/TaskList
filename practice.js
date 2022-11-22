let todos = ['Get groceries', 'Wash car', 'Make dinner'];

todos.forEach(function(todoTitle){
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});

function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);
}

function changeToDone() {
    let button = document.getElementById('todo-button');
    button.innerText = 'Done';
}

let count = 0;
function countUp () {
    count = count +1;
    updateCount();
}

function countDown() {
    count = count -1;
    updateCount();
}

function updateCount() {
    let counter = document.getElementById('counter');
    counter.innerText = count;
}

function displayTitle() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;

    let div = document.createElement('div');
    div.innerText = title;
    document.body.appendChild(div);
}