const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // to avoid conflict with the frontend 

app.use(cors());

app.get('/tasks', (req, res) => {
    const tasks =
    {
        "taskListName": "Sample Task List",
        "tasks": [
            {
                "id": "843892lyl-he29-0836-9586c0t441d9",
                "name": "Task 1",
                "type": "rectangle"
            },
            {
                "id": "666647ncm-qi00-7635-4163h0y424f1",
                "name": "Task 2",
                "type": "circle"
            },
            {
                "id": "840151pgf-sw56-9568-1097h8a625o5",
                "name": "Task 2",
                "type": "circle"
            },
            {
                "id": "024524sjo-zs65-5704-8085c3j758j1",
                "name": "Task 2",
                "type": "circle"
            },
            {
                "id": "625121fhs-kj64-4067-2153p1r362b0",
                "name": "Task 2",
                "type": "circle"
            },
        ]
    };
    res.json(tasks)
})
app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})