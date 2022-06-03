const EventEmitter = require('events');
const uuid = require('uuid'); // generates a random id

// Logger event class
class Logger extends EventEmitter {
    log(msg) {
        // call Event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

// Exporting the logger class
module.exports = Logger;