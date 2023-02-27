const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: "Hello world" });
})

app.listen(3000);