const todos = document.querySelector('.todos');
const titles = ["Fazer", "Em Andamento", "Concluido"];

titles.forEach((t, index) => {
    const taskDiv = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = t;

    const addButton = document.createElement('button');
    addButton.textContent = "+";

    const removeButton = document.createElement('button');
    removeButton.textContent = "-";

     switch (index) {
        case 0:
            taskDiv.classList.add('do');
            break;
        case 1:
            taskDiv.classList.add('doing');
            break;
        case 2:
            taskDiv.classList.add('concluded');
            break;
    }

    taskDiv.appendChild(title);
    taskDiv.appendChild(addButton);
    taskDiv.appendChild(removeButton);
    todos.appendChild(taskDiv);
});

const allButtons = document.querySelectorAll('button');

allButtons.forEach(b => b.addEventListener('click', 
    () => {
        switch (b.textContent) {
            case "+":
                addNewTask();
                break;
            case "-":
                removeTask();
                break;
            case "edit":
                editTask();
                break;
        }
    }
));

const addNewTask = () => {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');

    let newTask = document.createElement('p');
    newTask.textContent = "novo item";
    
    taskDiv.appendChild(newTask);
    todos.appendChild(taskDiv);
}

const removeTask = () => {
    const taskDiv = document.querySelector('.taskDiv');
    todos.removeChild(taskDiv);
}

const editTask = () => {
    const taskDiv = document.querySelector('.taskDiv');
    taskDiv.textContent = "novo item editado";
}