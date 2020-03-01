import { resolve } from "path";
import { existsSync } from "fs";
import { config } from "dotenv/types";

export function env() {
    const envFilePath = resolve(__dirname, "..", ".env");

    if (existsSync(envFilePath)) {
        config({ path: envFilePath });
    }
}