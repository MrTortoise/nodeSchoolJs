let net = require('net');
let strftime = require('strftime');

let server = net.createServer(function (socket) {
    // socket handling logic
    let time = strftime('%Y-%m-%d %H:%M\n');
    socket.end(time);
});

let port = process.argv[2]
server.listen(port);
