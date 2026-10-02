const apikeymiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey || apiKey !== "my-secret-api-key") {
        return res.status(401).json({
            message: "Geçersiz API anahtarı"
        });
    }

    next();
}

module.exports = apikeymiddleware;