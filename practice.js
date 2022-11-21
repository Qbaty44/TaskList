let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';



function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);


let button = document.createElement('button')
button.innerText = 'Click me';
document.body.appendChild(button);


document.title = 'ToDoApp';

function greeting(firstName) {
   console.log('Hello ' + firstName);
}

function toUpper(str) {
    console.log(str.toUpperCase());
}

function convert(length) {
    console.log(length * 2.54);
}

greeting('Łukasz');
toUpper('Łukasz');
convert(10);