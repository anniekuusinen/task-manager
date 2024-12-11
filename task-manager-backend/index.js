const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // to avoid conflict with the frontend 

app.use(cors());
app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})