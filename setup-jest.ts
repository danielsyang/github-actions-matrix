require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl || !databaseUrl.includes("localhost")) {
  throw new Error("Invalid prisma database URL");
}
