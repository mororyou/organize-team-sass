import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']),
    DATABASE_URL: z.string().url(),
    CLERK_PUBLISHABLE_KEY: z.string(),
    CLERK_SECRET_KEY: z.string(),
    CLERK_SIGN_IN_FALLBACK_URL: z.string(),
    CLERK_SIGN_UP_FALLBACK_URL: z.string(),
    CLERK_SIGN_IN_URL: z.string(),
    CLERK_SIGN_UP_URL: z.string(),
  },
  runtimeEnv: process.env,
});
