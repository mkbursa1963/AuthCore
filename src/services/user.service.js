const createUserService = (name, email) => {
    if (!name || !email) {
        throw new Error("Lütfen isim ve email alanlarını doldurun");
    }
    return {
        name: name,
        email: email
    };
}
module.exports = createUserService;