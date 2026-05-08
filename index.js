const express = require('express');
const path = require('path');
const http = require('http');
const res = require('express/lib/response');

const app = express();

const server = http.createServer(app);

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})

app.listen(9000, () => console.log("Server is running..."));