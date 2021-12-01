
// user input form

const form = document.querySelector('form');
form.addEventListener('submit', addTask);

//tasklist
const taskList = document.querySelector('ul');
taskList.addEventListener('click', delTask);

//delete btn
const deleteBtn = document.querySelector('#delete-tasks')
deleteBtn.addEventListener('click', delTasks)

//page reload
document.addEventListener('DOMContentLoaded', 'getTasks')

//get Tasks
function getTasks() {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // for each task in tasks - create li and add to task list
    tasks.forEach(function (taskFromLS) {
        //create li and add to task list
        //create element to DOM  //copy from addTask function
        const li = document.createElement('li');

        //add css class
        li.className = 'collection-item';
        //add text to element
        const text = document.createTextNode(task);
        li.appendChild(text);

    })
}


function delTasks() {
    //taskList.innerHTML = ""; //kõige lihtsam kustutamine - ul valheline sisu asendatakse tyhja tkstiga, sobib väikeste listide
    console.log(taskList.firstChild);  // tekst
    console.log(taskList.firstElementChild); //kustutab esimese, järgmine liigub esimeseks jne. Kustutab kiiremini
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    removeAllStorage()
}

function removeAllStorage() {
    localStorage.removeItem('tasks')
}


//delTask  - delete singel task from LS
function delTask(event) {
    //console.log(event.target.TextContent);
    if(event.target.textContent === 'X') {
        if(confirm('Do you relly want to delete this task?')) { //prompt funkts true-false
            //console.log(event.target.parentElement);
            event.target.parentElement.remove();
            //console.log(event.target.parentElement.textContent.slice(0, -1))
            let task = event.target.parentElement.textContent.slice(0, -1)
            removeStorage(task)
        }
    }
}

function removeStorage(task) {
        let tasks    // let võib olla ilma väärtuseta
        if(localStorage.getItem('tasks') === null) {
            tasks = []
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        //console.log(tasks)
        tasks.forEach(function(taskFromLS, taskIndex){
           if(taskFromLS === task){
               tasks.splice(taskIndex, 1)
           }
    })
        localStorage.setItem('tasks', JSON.stringify(tasks))

}



function addTask(event){
    //get task input from form input
    const task = document.querySelector('#task').value;
    console.log(event.type);
    //get element from DOM

    //create element to DOM
    const li = document.createElement('li');

    //add css class
    li.className = 'collection-item';
    //add text to element
    const text = document.createTextNode(task);
    li.appendChild(text);

    //kustutamine
    // loo element, lisa ...
    const link = document.createElement('a');
    //add css style
    link.className = 'secondary-content';
    //add text
    link.appendChild(document.createTextNode('X'))
    //add link to list item
    li.appendChild(link);
   //add href attribute
    link.setAttribute('href', '#');

    taskStorage(task)  //kutsu funktsioon
    //add li to task list
    taskList.appendChild(li);
    //save task to localstorage, tuleks luua funktsioon, teha massiiv
    //clear form input value
    document.querySelector('#task').value = "";

    event.preventDefault();
}

function taskStorage(task) {
    /*const tasks = [];
    tasks.push(task)
    console.log(tasks)*/
    let tasks    // let võib olla ilma väärtseta
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    console.log(tasks)
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}








//Local storage, et vältida andmete kadumist browseris

// add task function

/*function addTask(task){
    //get element from DOM
    const taskList = document.querySelector('ul');
    console.log(taskList)
    //create element to DOM
    const li = document.createElement('li');

    //add css class
    li.className = 'collection-item';
    //add text to element
    const text = document.createTextNode(task);
    li.appendChild(text);
    //add li to task list
    taskList.appendChild(li);

    console.log(li);
}

//addTask('Study Angular');*/
