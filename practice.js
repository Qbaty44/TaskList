let todos = ['Get groceries', 'Wash car', 'Make dinner'];
todos.push('another todo');

todos.forEach(function(todoTitle){
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});

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