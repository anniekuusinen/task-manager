const path = require('path');
const fs = require('fs');
const tasks = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/tasks.json'), 'utf8')
);

const getTasks = (req, res, next) => {
    try {
        // Shuffle the tasks randomly
        const shuffledTasks = tasks.tasks.sort(() => Math.random() - 0.5)
        
        res.json({
            taskListName: tasks.taskListName,
            tasks: shuffledTasks
        })
    } catch (err) {
        next(err)
    }
};

module.exports = { getTasks };