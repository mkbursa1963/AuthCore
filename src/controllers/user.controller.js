const createUser = (req, res) => {
const { name, email } = req.body;
const createUserService = require("../services/user.service");
    
try {
    const user = createUserService(name, email);
    res.status(201).json({
        message: "Kullanıcı başarıyla oluşturuldu",
        user: user
    });
}
catch (error) {
    return res.status(400).json({
        message: error.message
    });
}
     
};

module.exports = createUser;