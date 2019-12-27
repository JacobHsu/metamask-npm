// https://github.com/MetaMask/rpc-cap/blob/master/README.md
// https://socket.io/get-started/chat/
// app\scripts\controllers\permissions\index.js
var app = require('express')();
var http = require('http').createServer(app);
var server = require('socket.io')(http);

const JsonRpcEngine = require('json-rpc-engine');
const RpcCap = require('rpc-cap').CapabilitiesController;


// Here we will restrict access to subsequent functions:
const capabilities = new RpcCap({
    restrictedMethods: {
  
      // Restricted methods themselves are defined as
      // json-rpc-engine middleware functions.
      'unlockDoor': {
        description: 'Allows unlocking a Very Special door.',
        method: (req, res, next, end) => {
          unlockDoor();
          res.result = 'Unlocked!';
          end();
        }
      }
    },
  
    // This library also depends on your ability to present the request
    // To an entity in charge of administrating permissions:
    requestUserApproval: async (domainInfo, req) => {
      return checkIfUserTrusts(domainInfo, req);
    }
  });
  
  function createPermissionedEngine (domain) {
    const engine = new JsonRpcEngine();
    engine.push(capabilities.providerMiddlewareFunction.bind(capabilities, domain))
    return engine
  }
  
  // Imagine a very standard server-response framework, here I'll use
  // something like socket.io:
  server.on('connection', (socket) => {

    // It is a critical security assumption that these connections can be authenticated outside of this framework:
    const domain = 'localhost:3000';//authenticateConnection(socket);
    const engine = createPermissionedEngine(domain);
  
    socket.on('message', (message, response) => {
      console.log('message: ' + message);
      engine.handle(message, (err, response) => {
        console.log(response)
        socket.emit('request', response);
      })
    })
  })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

server.on('connection', function(socket){
    console.log('a user connected'); //index.html socket
});

http.listen(3000, function(){
    console.log('listening on *:3000');
 });