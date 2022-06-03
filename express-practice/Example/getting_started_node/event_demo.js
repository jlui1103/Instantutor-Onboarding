const EventEmitter = require('events');

// Create/inherit from event class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('test', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('test');
