const Logger = require('./logger.js');

const logger = new Logger();

// initializing listener
logger.on('message', (data) => {
    // The data can be used if calling the method
    if (data != null)
        console.log('Called Listener: ', data);
    // This will still work with an emit
    else
        console.log('Call the damn method');
});

// calling method of logger class to emit
logger.log('Test');
logger.log('Test 2');
logger.emit('message'); 
logger.log();