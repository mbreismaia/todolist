const todos = document.querySelector('.todos');
const titles = ["Fazer", "Em Andamento", "Concluído"];

titles.forEach((t, index) => {
    const taskDiv = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = t;

    const addButton = document.createElement('button');
    addButton.textContent = "+";

    const dv = document.createElement('div');
    dv.classList.add('titleDiv');
    dv.appendChild(title);
    dv.appendChild(addButton);

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

    taskDiv.appendChild(dv);
    todos.appendChild(taskDiv);

    addButton.addEventListener('click', () => addNewTask(taskDiv));
});

const addNewTask = (parentDiv) => {
    const newtaskDiv = document.createElement('div');
    newtaskDiv.classList.add('newTask');
    
    let newTask = document.createElement('p');
    newTask.textContent = "Nova tarefa";

    const removeButton = document.createElement('button');
    removeButton.textContent = "-";

    const editButton = document.createElement('button');
    editButton.textContent = "edit";

    newtaskDiv.appendChild(newTask);
    newtaskDiv.appendChild(removeButton);
    newtaskDiv.appendChild(editButton);
    parentDiv.appendChild(newtaskDiv);

}

// const removeTask = (parentDiv) => {
   
// }

// const editTask = (parentDiv) => {
  
// }
