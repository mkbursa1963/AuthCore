const getPrisma = require("../db/prisma");

const createUserService = async (name, email, password) => {
    const prisma = await getPrisma();
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    });
    if (!name || !email || !password) {
        throw new Error("Lütfen tüm alanları doldurun");
    }
    return user;
}
module.exports = createUserService;