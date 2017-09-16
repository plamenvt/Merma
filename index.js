const server = require('server');

// Launch the server to always answer "Hello world"
server({ port: 3001 }, ctx => 'Hello!');