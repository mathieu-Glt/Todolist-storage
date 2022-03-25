const todoButton = document.querySelector('.todo-button');
console.log(todoButton);
const todoList = document.querySelector('.todo-list');
console.log(todoList);



todoButton.addEventListener('click', addTodo);




function addTodo(event) {
    event.preventDefault();
    //console.log('hello');
    let x = 0;
    
    
    // création de la div tâche
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-li');
    todoLi.setAttribute("data-index", "index-"+ x)
    todoLi.setAttribute("class", "list")

 
    // création du boutton completed de la div tâche
    const linkaCompleted = document.createElement('a');
    linkaCompleted.innerHTML = '<i class="fas fa-check"></i>';
    linkaCompleted.setAttribute("data-index", "index-"+ x)
    linkaCompleted.classList.add("completed-btn");
    todoLi.appendChild(linkaCompleted);
    
    /* création du boutton completed de la div tâche
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
*/  
    // création du boutton updated de la div tâche
    const linkaUpdated = document.createElement('a');
    linkaUpdated.innerHTML = '<i class="fas fa-check"></i>';
    linkaUpdated.setAttribute("data-index", "index-"+ x)
    linkaUpdated.classList.add("updated-btn");
    todoLi.appendChild(linkaUpdated);
    

    /* création du boutton updated de la div tâche
    const form = document.createElement('form');
    const updatedButton = document.createElement('button');
    updatedButton.innerHTML = '<i class="fas fa-edit"></i>';
    updatedButton.classList.add("updated-btn");
    todoDiv.appendChild(updatedButton);
    //console.log(todoList)
    //const uls = document.querySelectorAll('todo-list')
    //console.log(uls)
    */
    
    // création du boutton deleted de la div tâche
    const linkaDeleted = document.createElement('a');
    linkaDeleted.innerHTML = '<i class="fas fa-trash"></i>';
    linkaDeleted.setAttribute("data-index", "index-"+ x)
    linkaDeleted.classList.add("deleted-btn");

    // AJOUTER TODO A TODO-LIST
    todoLi.appendChild(linkaCompleted);
    todoLi.appendChild(linkaUpdated);
    todoLi.appendChild(linkaDeleted);
    todoList.appendChild(todoLi);



    console.log("ma div tâche: ", todoList)

    x++;

    //const divs = document.querySelectorAll('todo')
    //console.log(divs)
    //todoInput.value = "";
    // A chaque validation du bouton de l'input pour vider son contenu

}
