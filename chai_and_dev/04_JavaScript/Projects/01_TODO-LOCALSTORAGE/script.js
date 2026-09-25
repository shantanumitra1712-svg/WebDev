document.addEventListener('DOMContentLoaded', () => { // every thing will be load up after dom loads
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }
        tasks.push(newTask)
        saveTask(); // calling save task after updating tasks array
        renderTask(newTask);
        todoInput.value = "" //clears input
        // console.log(tasks);
    })

    function renderTask(task) {
        // console.log(task.text);
        const li = document.createElement('li')

        if (task.completed) li.classList.add('completed')

        li.setAttribute('data-id', task.id)
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `;
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed
            li.classList.toggle('completed')
            saveTask()
        })

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation() // prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTask();
        })

        todoList.appendChild(li)
    }

    function saveTask() { //function for saving tasks in local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})