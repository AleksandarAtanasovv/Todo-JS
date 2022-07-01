const btn = document.getElementById('btn');
const todo = document.getElementById('inputField');
const todos = document.getElementById('todos');

btn.addEventListener('click', () => {
    createToDo();
})

function createAndRemoveToDo(){
    //Todo Create
    const newP = document.createElement('p')
    newP.classList.add('todoParagraph')
    newP.innerText = todo.value;
    todos.appendChild(newP)
    todo.value = "";
    //Todo Remove

    newP.addEventListener('click', () =>{
        
    })
}