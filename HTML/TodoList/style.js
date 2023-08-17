var form = document.querySelector('form')
var buttun = document.querySelector('button')
var input = document.querySelector('input')
var todos = document.querySelector('.todos')
var addinput = document.querySelector('.addinput')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text: val,
        })
        saveTodoList()
    }
    input.value = ''
})

function  addTodoElement(todo){
    var li = document.createElement('li')
    li.innerHTML =  ` <span>${todo.text}</span>
    <i class="far fa-trash-alt"></i>`
    if(todo.status === 'complated'){
        li.setAttribute('class','complated')
    }
   li.addEventListener('click', function(){
    this.classList.toggle('complated');
    saveTodoList()
   
   })
   li.querySelector('i').addEventListener('click',function(){
       this.parentElement.remove()
       saveTodoList()
     
   })
    todos.appendChild(li)
}
function saveTodoList(){
    let todoList = document.querySelectorAll('li')
     let todoStorage = []
     todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status  = item.getAttribute('class')
  
        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todolist', JSON.stringify(todoStorage))
//    console.log(localStorage.getItem('todolist'));
}
function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function(item){
        addTodoElement(item)
    })
}

init()