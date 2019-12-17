const http = require('http');
const express = require('express');
const dataRouter = require('./routes/route')

const app = express();

app.use(express.json());

app.use('/api/v1', dataRouter)

const server = http.createServer(app);

const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);