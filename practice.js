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

function toUpper(stringArr) {
    let result = [];
    stringArr.forEach(function (str) {
        result.push(str.toUpperCase());
    });
    console.log(result);
}
toUpper(['hello ', 'world']);

function arrayDouble(stringArr) {
    let result = [];
    stringArr.forEach(function (str) {
        result.push(str);
        result.push(str);
    });
    console.log(result);
}

arrayDouble(['bark ', 'meow ']);


function arraySum(numArray) {
    let total = 0;
    numArray.forEach(function (num) {
        total = total + num;
    });
    console.log(total);
}

arraySum([1, 2, 3, 4]);
arraySum([-5, 8, 0, 4]);