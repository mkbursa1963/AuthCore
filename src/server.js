const express = require('express');
const app = express();
const apiKey = req.headers['x-api-key']; //API key, istemcinin API'ye erişim yetkisini doğrulamak için kullanılır.

app.use((req, res, next) => { //Middleware, istemciden gelen isteği işlemek için kullanılır.
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== 'my-secret-api-key') { //API key doğrulaması, istemcinin API'ye erişim yetkisini kontrol eder.
        return res.status(401).json({ //HTTP status code, istemcinin isteğinin sonucunu belirtir.
            message: "Geçersiz API anahtarı"
        });
    }
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => { 
    consol.log("1. Middleware çalıştı");
    next();
});

app.use((req,res,next) => {
    console.log("2. Middleware çalıştı");
    next();
});

app.get("/api/health", (req, res) => { 
    res.json({
        status:"ok"
    });
});

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
    if(!name || !email) {
        return res.status(400).json({ //HTTP status code, istemcinin isteğinin sonucunu belirtir.
            message: "Lütfen isim ve email alanlarını doldurun"
        });
    }
    res.status(201).json({ //HTTP status code, istemcinin isteğinin sonucunu belirtir.
    message: "Kullanıcı başarıyla oluşturuldu",
    user: { 
        name: name,
        email: email
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

