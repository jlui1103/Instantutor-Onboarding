const http = require('http');

// Create server object
http
    .createServer((req, res) => {
        // Write response (does not include some httprotocol stuff)
        res.write('Hello Test');
        res.end();
    })
    // listening on port 5000
    .listen(5000, () => console.log('Server Running'));