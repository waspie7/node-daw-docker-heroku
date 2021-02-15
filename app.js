/*const ronin = require('ronin-server')
const mocks = require('ronin-mocks')

const server = ronin.server()

server.use('/', mocks.server(server.Router(), false, true))
server.start()*/

const express = require("express");
const app = express();

app.get("/", (request, response) => {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello world ! this is a node.js app deployed by heroku.");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
