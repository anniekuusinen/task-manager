const path = require('path');
const fs = require('fs');
const tasks = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/tasks.json'), 'utf8')
);

const getTasks = (req, res, next) => {
    try {
        // Shuffle the tasks randomly
        const shuffledTasks = tasks.tasks.sort(() => Math.random() - 0.5)
        // Show the first 5 tasks
        const randomTasks = shuffledTasks.slice(0, 5)
        res.json({
            taskListName: tasks.taskListName,
            tasks: randomTasks
        })
    } catch (err) {
        next(err)
    }
};

module.exports = { getTasks };