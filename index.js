const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    console.log('processing request by pid : ', process.pid);
    res.json({ message: "Hello world from lightsail through pm2" });
})

app.listen(3000);