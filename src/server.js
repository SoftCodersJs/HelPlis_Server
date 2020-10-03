const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send("Hello World");
});

server.listen(5000, () => {
    console.log('Server is runing');
});