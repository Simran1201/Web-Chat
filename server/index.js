// Using single port to spine off the HTTP Server and the web socket server
const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;

//Using HTTP protocol
const http = require('http');

// tieing the WebSocket server to the HTTP protocol
const server = http.createServer();
// Listening http with the particular port
server.listen(webSocketsServerPort);
// When connection is done
console.log("Listening on port 8000");
const wsServer = new webSocketServer({
    httpServer: server
});

// Creating the client where we store all the clients
const clients = {}

// Generating Unique id for user:
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4(); // eg: e501ace1-3aff
};

// on web server what happen when user sends the request
wsServer.on("request", function (request) {

    // Created unique id for every user that connects to server
    var userID = getUniqueID();

    // Accepting the request and making new connection
    const connection = request.accept(null, request.origin);

    // Storing the client connection using unique key
    clients[userID] = connection;

    // When server recieves any message
    connection.on("message", function (message) {
        // Broadcasting  message to all connected clients 
        for(key in clients){
            // Forwarding the message
            clients[key].sendUTF(message.utf8Data);
        }
    })
});