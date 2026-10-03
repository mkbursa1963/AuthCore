require("dotenv").config();

const { PrismaMssql } = require("@prisma/adapter-mssql");

let prisma;

const getPrisma = async () => {
    if (prisma) {
        return prisma;
    }

    const Prisma = await import("../generated/prisma/client.ts");

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

    prisma = new Prisma.default.PrismaClient({
        adapter
    });

    return prisma;
};

module.exports = getPrisma;