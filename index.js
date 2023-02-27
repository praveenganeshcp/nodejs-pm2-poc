const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    console.log('processing request by pid : ', process.pid);
    res.json({ message: "Hello world", status: false });
})

app.listen(3000);