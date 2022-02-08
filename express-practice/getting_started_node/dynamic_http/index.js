const http = require('http');
const path = require('path');
const fs = require('fs');

// Creating a dynmaic response based on file path
const server = http.createServer((req, res) => {
    // Build file path (using ternary operators)
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );
    console.log(filePath);

    // Extension of the file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check the extension and set the content type
    switch(extname) {
        case'.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Reading the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Page not found code
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    // Sending back the error page
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(content, 'utf-8');
                    res.end();
                });
            } else {
                // Server error (could write a page but too lazy)
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    });
})

// process.env.PORT(env var) is the port decided by the host
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}/`));