import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig } from "prisma/config";

// Load .env.local first (Next.js convention), then fall back to .env
expand(config({ path: ".env.local" }));
expand(config());

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DIRECT_URL"] || process.env["DATABASE_URL"],
  },
});
