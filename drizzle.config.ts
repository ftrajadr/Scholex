import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./src/database",
    schema: "./src/database/schema",
    dialect: "mysql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
});