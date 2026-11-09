const fs = require('fs')
const filePath = "./task.json"

const command = process.argv[2]
const argument = process.argv[3]

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({ task })
    saveTasks(tasks)

    console.log("Task added", task);

}

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => {
        console.log(`${index + 1} - ${task.task}`);

    })
}

const removeTask = (taskNumber) => {
    const tasks = loadTasks()

    const index = taskNumber - 1;

    if (index < 0 || index >= tasks.length) {
        console.log("task not found !");
        return;
    }

    const removedTask = tasks.splice(index, 1)
    saveTasks(tasks)

    console.log("removed task", removedTask[0].task);

}

if (command === 'add') {
    addTask(argument)
}
else if (command === 'list') {
    listTasks()
}
else if (command === 'remove') {
    removeTask(parseInt(argument))
}
else {
    console.log("Command not found !");
}

