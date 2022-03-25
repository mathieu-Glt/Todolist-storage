window.addEventListener("DOMContentLoaded", (event) => {
    console.log('hello');
    selectElement();
})

// SELECTEURS
function selectElement() {
const todoButton = document.querySelector('.todo-button');
handlerClick(todoButton)
//handlerClick(todoList)

}

// ECOUTEURS
function handlerClick(todoButton) 
{
todoButton.addEventListener('click', createTask);
}



// FONCTIONS
function createTask(event) {
    event.preventDefault();
    // element "ul" présent dans le HTML que je récupère
    const todoList = document.querySelector('.todo-list');
    createDivTask(todoList)
}

function createDivTask (todoList) {
    // création de la div tâche
    const todoLi = document.createElement('li');
    todoLi.classList.add("todo-item");
    const todoDiv = document.createElement('div');
    // data todo
    const allTodos = document.querySelectorAll(".todo-item")
    console.log(allTodos.length)
    let index = 0;
    /*allTodos.forEach(element => {
        element.dataset.todoId = ++index;
    });*/
    
    // AJOUTER TODO A TODO-LIST
    todoLi.dataset.todoId = allTodos.length + 1;
    todoDiv.classList.add('taskTodo');
    todoList.appendChild(todoLi);
    todoLi.appendChild(todoDiv);
    createButtonDivTask(todoDiv);

}


function createButtonDivTask(todoDiv) {
    console.log('createButtonDivTask')
        // création du boutton completed de la div tâche
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("completed-btn");
    
        // création du boutton updated de la div tâche
        const updatedButton = document.createElement('button');
        updatedButton.innerHTML = '<i class="fas fa-edit"></i>';
        updatedButton.classList.add("updated-btn");
        
        // création du boutton deleted de la div tâche
        const deletedButton = document.createElement('button');
        deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
        deletedButton.classList.add("deleted-btn");

        todoDiv.appendChild(completedButton);
        todoDiv.appendChild(updatedButton);
        todoDiv.appendChild(deletedButton);




        ListenerClickButtonCompleted(completedButton)
        ListenerClickButtonUpdated(updatedButton)
        ListenerClickButtonDeletated(deletedButton)




}

// ECOUTEURS
function ListenerClickButtonCompleted(completedButton) 
{
    
//console.log('handlerClickTaskButtonCompleted')
completedButton.addEventListener('click', handlerButtonTaskCompleted)
}

function ListenerClickButtonUpdated(updatedButton) {
//console.log('handlerClickTaskButtonUpdated')
updatedButton.addEventListener('click', handlerButtonTaskUpdated)
}

function ListenerClickButtonDeletated(deletedButton) {
//console.log('handlerClickTaskButtonDeleted')
deletedButton.addEventListener('click', handlerButtonTaskDeleted)
}
    



function handlerButtonTaskCompleted (event) {
    //curenttarget fait reference à l'élément sur lequel un évènement a été attaché
    //console.log(event.currentTarget)
    const input2 = document.querySelector('.edit')
    const todop = event.target.closest('.taskTodo')
    input2.classList.replace("edit", "completed")
    
}



function handlerButtonTaskUpdated (event) {
    const taskTodo = event.target.closest('.todo-item');
    const div = document.createElement('div')
    div.setAttribute("id", "div")
    div.classList.add("div-edit")
    const input = document.createElement('input')
    input.setAttribute("id", "input")
    input.classList.add("edit")
    div.appendChild(input);
    taskTodo.appendChild(div)
    input.addEventListener("keydown", (event)=>{
        
        let unicode = event.keyCode
        console.log(unicode)
        if (unicode === 13 || unicode === 32) {
            addStorageData()
        }
        
    });
    
}

function addStorageData(event) {
    //console.log(event.target)

    let input = document.querySelectorAll("#input")
    for (let i = 1; i < input.length+1; i++) {
        localStorage.setItem('tâche ' + i, input[i-1].value)
        
    }
}

function deleteStorageData(e) {
    let currentList = e.closest('.todo-item')
    let IdTodoItem = currentList.dataset.todoId;
    localStorage.removeItem('tâche ' + IdTodoItem)
    console.log(IdTodoItem)
}


function handlerButtonTaskDeleted (e) {
    const item = e.target
    deleteStorageData(e.target)
    const x = item.classList[0]
    let input = document.querySelector(".todo-item")
    let nodeSibling = input.nextSibling
    if(x === "deleted-btn") {
        const parentTodo = item.parentElement;
        const parentLi = parentTodo.parentElement;
        parentLi.classList.replace("todo-item", "hide");
        let input = document.querySelectorAll("#input");
    


        
    }


}




window.addEventListener("DOMContentLoaded", (event => {
   localStorage.clear();

}))



