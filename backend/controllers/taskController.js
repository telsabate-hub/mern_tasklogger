const getTasks = (req, res) => {
    const tasks = [
        {
            id: 1, 
            text: "Task 1", 
            date: new Date().toLocaleDateString()
        }
    ];

    res.status(200).json( tasks );
}

const setTask = (req, res) => {
    res.status(200).send('set task');
}

const updateTask = (req, res) => {
    res.status(200).send(`update task ${req.params.id}`);
}

const deleteTask = (req, res) => {
    res.status(200).send(`delete task ${req.params.id}`);
}

module.exports = {
    getTasks,
    setTask, 
    updateTask,
    deleteTask
}