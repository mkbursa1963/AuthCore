require("dotenv").config();

(async () => {
    const Prisma = await import("./src/generated/prisma/client.ts");
    const { PrismaMssql } = require("@prisma/adapter-mssql");

    const adapter = new PrismaMssql({
        server: process.env.DB_SERVER,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        options: {
            trustServerCertificate: true
        }
    });

    const prisma = new Prisma.default.PrismaClient({
        adapter
    });

    console.log("Prisma hazır:", typeof prisma);

    const users = await prisma.user.findMany();

    console.log("Users:", users);
})();