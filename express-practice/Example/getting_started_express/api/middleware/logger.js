const logger = (req, res, next) => {
    // Logging the url
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;