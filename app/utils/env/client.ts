import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  clientPrefix: 'PUCLIC_',
  client: {},
  runtimeEnv: process.env,
});
