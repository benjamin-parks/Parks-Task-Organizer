// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTask = $(".save");
const taskName = document.querySelector("#name");
const dueDate = document.querySelector("#datepicker");
const description = document.querySelector("#description");
const toDo = document.querySelector("#todo-cards")

//date picker for form
$( function() {
    $( "#datepicker" ).datepicker();
  } );


// Todo: create a function to generate a unique task id .uniqueId()
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("test", tasks)
    for (const task of tasks){
        const cardDiv = document.querySelector("#todo-cards");
        const newdiv = document.createElement("div");
        newdiv.classList.add("task-card");
        const title = document.createElement("h4");
        const description = document.createElement("i");
        const dueDate = document.createElement("p");
        const delBtn = document.createElement("button");
        delBtn.classList.add("btn-danger");
        delBtn.textContent = "Delete Task"
        title.textContent = task.title;
        dueDate.textContent = task.dueDate;
        description.textContent = task.description;
        newdiv.append(title);
        newdiv.append(description);
        newdiv.append(dueDate);
        newdiv.classList.add("drag");
        newdiv.append(delBtn);

        cardDiv.append(newdiv);

        $( function() {
            $( ".drag" ).draggable();
          } );
    }
    

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task

function handleAddTask(event){
    console.log("HandleAddTask is running.")
    const task = {
        "title": taskName.value,
        "dueDate": dueDate.value,
        "description": description.value
    };
    console.log(task);
    //show errors if any input is blank
    if (taskName.value === ""){
        alert("Error! Task requires a name.");
    }
    else if (dueDate.value === "") {
        alert("Error! Due Date cannot be blank.");
    }
    else if (description.value === ""){
        alert("Error! Description cannot be blank.")
    }
    else {
        //close modal if no errors arise. 
    $('#formModal').modal('hide');
    
    //save data tasks to local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    console.log("task object", task)
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //call createTaskCard function
    createTaskCard();

    // clear form inputs for new task
    taskName.value = "";
    dueDate.value = "";
    description.value = "";
    };

    
}

addTask.on("click", handleAddTask);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    createTaskCard();
});
