const loggermiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
}