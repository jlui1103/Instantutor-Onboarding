const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Root directory
    if (req.url === '/') {
        // Reading the html file
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), (err, content) => {
                if (err) throw err;

                // writing the response
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("<p>this is a sample html para</p>");
                res.end(content);
            })
    }

    // returing json to a user path
    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Jane Doe', age: 30}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
})

// process.env.PORT(env var) is the port decided by the host
const PORT = process.env.PORT || 5000;

const HOSTNAME = "127.0.0.1" || process.env.HOSTNAME;

server.listen(PORT, () => console.log(`Server running at http://${HOSTNAME}:${PORT}/`));