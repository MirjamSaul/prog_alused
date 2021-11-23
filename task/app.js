
// user input form

const form = document.querySelector('form');
form.addEventListener('submit', addTask);

console.log(form);

function addTask(event){
    //get task input from form input
    const task = document.querySelector('#task').value;
    console.log(event.type);
    //get element from DOM
    const taskList = document.querySelector('ul');
    //create element to DOM
    const li = document.createElement('li');

    //add css class
    li.className = 'collection-item';
    //add text to element
    const text = document.createTextNode(task);
    li.appendChild(text);
    //add li to task list
    taskList.appendChild(li);
    //clear form input value
    document.querySelector('#task').value = "";

    event.preventDefault();

}


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
