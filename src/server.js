const express = require('express');
const app = express();

app.use(express.json()); //Middleware, istemciden gelen JSON verilerini okuyabilmesi ve işlemesi için kullanılır.

app.get("/api/health", (req, res) => {//Endpoint, istemcinin API'ye yaptığı isteğin URL'sidir vasa status çıktısını verir.
res.json({
    status: "başardık oleyyy"
});});

app.get("/api/hello", (req, res) => { //Query parameter, istemcinin URL üzerinden API'ye gönderdiği ek bilgidir.
    const { name } = req.query; 
    res.json({
         message : `Merhaba, ${name}!`
    });
});

app.post("/api/users", (req, res) => { 
    const { name,email } = req.body; 
    res.json({
        message: "Kullanıcı başarıyla oluşturuldu",
        user:{
            name:name,
            email:email  
        }
    });
});

app.get("/api/users/:id" , (req, res) => { //Path parameter, istemcinin URL üzerinden API'ye gönderdiği ek bilgidir.
    const { id } = req.params; 
    res.json({
        message: "Kullanıcı bilgisi getirildi",
        user: {
            id: id
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

