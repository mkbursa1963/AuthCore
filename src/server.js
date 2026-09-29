const express = require('express');
const app = express();
app.get("/api/health", (req, res) => {
res.json({
    status: "başardık oleyyy"
});});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
app.get("/api/hello", (req, res) => {
    const { name } = req.query; 
    res.json({
         message : `Merhaba, ${name}!`
    });
});