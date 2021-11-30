
// user input form

const form = document.querySelector('form');
form.addEventListener('submit', addTask);

//tasklist
const taskList = document.querySelector('ul');
taskList.addEventListener('click', delTask);

//delTask
function delTask(event) {
    //console.log(event.target.TextContent);
    if(event.target.textContent === 'X') {
        if(confirm('Do you relly want to delete this task?')) {
            event.target.parentElement.remove();
        } //prompt funkts true-false
        //console.log(event.target.parentElement);
    }
}
//console.log(form);

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
