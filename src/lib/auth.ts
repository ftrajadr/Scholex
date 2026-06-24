import db from "@/database";
import * as authschema from "@/database/schema/auth-schema";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "pg" or "mysql"
        schema: authschema

    }),
    advanced: {
        database: {
            generateId: () => {
                return crypto.randomUUID()
            }
        }
    },
    //... the rest of your config
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    }
});