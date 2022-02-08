const fs = require('fs');
const path = require('path');

// Create folder
/*fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if (err) throw err;
    console.log('Folder Created');
})*/

// Create and write file
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello World', err => {
    if (err) throw err;
    console.log('File Written To');
})

// Overwriting the file
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Line 1\n', err => {
    if (err) throw err;
    console.log('First line written');

    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'Callback Hell', err => {
        if (err) throw err;
        console.log('Second line written')

        // Read file
        fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (err, data) => {
            if (err) throw err;
            console.log();
            console.log(data);

            // Renaming file
            fs.rename(path.join(__dirname, 'test', 'test.txt'), 
            path.join(__dirname, 'test', 'renamed.txt'), err => {
                if (err) throw err;
                console.log("\nFile renamed");
            })
        })
    })
})