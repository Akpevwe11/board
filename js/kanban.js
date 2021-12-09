// add an event listener to the #add-task input field 
// only addTask if there is text in the input 
// remove the task text in the input once its added 

document.getElementById('add-task').addEventListener('click', function(){
     let taskValue = document.getElementById('task-value').value; 
     if(taskValue) addTask(taskValue); 
     document.getElementById('task-value').value = ''; 
  
}); 

// task functions 

//creat a function addTask 

const addTask = (taskValue) => {

  let task = document.createElement('li'); 
  task.classList.add('task'); 
  task.classList.add('fill'); 
  task.setAttribute('draggable', 'true'); 
  task.addEventListener('dragstart', dragStart); 
  task.addEventListener('dragend', dragEnd); 

  let taskContent = document.createElement('div'); 
  taskContent.classList.add("task-content"); 
  taskContent.innerText = taskValue; 
 
 
  let trash = document.createElement('div'); 
  trash.classList.add('trash'); 
  trash.innerText = "X";
  trash.addEventListener('click', removeTask); 
 
  task.appendChild(taskContent); 
  task.appendChild(trash); 

  let tasks = document.getElementById('tasks-added'); 
  tasks.prepend(task); 

}

// create a function removeTask 

const removeTask = (event) => {
  // get task 
  let tasks = event.target.parentNode.parentNode; 
  let task = event.target.parentNode; 
  // remove task 
  tasks.removeChild(task); 

}

// create a variable task to store th selected task 
let task; 

// add an event listener dragstart to task 

const dragStart = (event) => {
  event.target.className += ' hold'; 
  task = event.target; 
  setTimeout(() => (event.target.className = "invisible"), 0); 
  
  console.log(task); 


}
// create a dragStart function 

// create a dragEnd function 

const dragEnd = (event) => {
event.target.className = 'task fill'; 

}

//create a dropzones by selecting .dropzone 

const drops = document.querySelectorAll('.drop'); 


// create a function dragEnter 
const dragEnter = (event) => {
  event.preventDefault(); 

}


// create a function dragOver 
const dragOver = (event) => {
  event.preventDefault(); 

}

// create a function dragLeave 

const dragLeave = (event) => {
  event.preventDefault(); 

}

// create a function dragDrop 
const dragDrop = (event) => { 
  event.target.append(task); 
 
}



// add eventlisteners to each drops

for(const drop of drops) {
  drop.addEventListener('dragenter', dragEnter); 
  drop.addEventListener('dragover', dragOver); 
  drop.addEventListener('dragleave', dragLeave); 
  drop.addEventListener('drop', dragDrop);  

}