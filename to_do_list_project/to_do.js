const todoList = document.querySelector(".toDoList");
const todoInput = document.querySelector(".form_input")
const todoAdd = document.querySelector(".button_add");

todoAdd.addEventListener('click',(e) =>{
    e.preventDefault(); // retirer le comportement de base du bouton
    const newTodo = document.createElement("li"); // création des li
    
    newTodo.className = "list_item"; // création des classes li
    newTodo.appendChild(document.createTextNode(`${todoInput.value}`));
    todoList.appendChild(newTodo);

    //! si value = 0 alors
    if(todoInput.value === ""){
        
       
    }else{
        // création de mes 2 boutons
        const todoRemove = document.createElement('button');
        const todoCheck = document.createElement('button');

        // icon check et trash
        todoCheck.innerHTML = '<i class="far fa-check-square"></i>';
        todoRemove.innerHTML = '<i class="far fa-trash-alt"></i>';

        // add class
        todoCheck.classList.add('item-check');
        todoRemove.classList.add('item-remove');

        newTodo.appendChild(todoCheck);
        newTodo.appendChild(todoRemove);
    }
});

todoList.addEventListener('click', (e)=>{
    
    const button = e.target.parentNode;

    //!condition suppression
    if(button.classList.contains('item-remove')){
        button.parentNode.remove(); //---suppression
    
    //!condition check line through
    }else if(button.classList.contains('item-check')){

        if(button.parentNode.style.textDecoration==="line-through"){
            button.parentNode.style.textDecoration ="none";

        //***ALors afficher la line through
        }else{
            button.parentNode.style.textDecoration ="line-through";
        }
    }
});