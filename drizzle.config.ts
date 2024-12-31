import { defineConfig } from 'drizzle-kit';
import { env } from '~/utils/env/server';

export default defineConfig({
  schema: './app/schemas/db/schema.ts',
  dialect: 'postgresql',
  out: './.drizzle',
  verbose: true,
  strict: true,
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
