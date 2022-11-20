const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove(); 
    // 클릭한 li.id와 다른 todo는 localstorage에서 보유하도록
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "x"
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {

    // parse string to array
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;

    // foreach for array item, '=>': arrow function
    //parsedTodos.forEach((item) => console.log("this is the turn of ", item));
    parsedTodos.forEach(paintToDo);
}

/* array filter */
/*
    기존 배열에 필터를 걸고, 배열 item 마다 필터 함수가 동작,
    필터가 false를 반환하면 해당 item은 삭제,
    필터가 true를 반환하면 해당 item은 유지,
    모든 과정 거친 후 새로운 배열 생성

    Example)
    const todos = [{text:"lala"}, {text: "lolo"}]
    function sexyfilter(todo){ return todo.text !== "lolo"}
    todos.filter(sexyfilter)
        -> [{text:"lala"}]
*/