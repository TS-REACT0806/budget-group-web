import { z } from 'zod';
import { STAGES } from './constants/env';

const envSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Dev),
  API_URL: z.string().url(),
});

export const envConfig = envSchema.parse({
  STAGE: import.meta.env.VITE_STAGE,
  API_URL: import.meta.env.VITE_API_URL,
});

export type EnvConfig = z.infer<typeof envSchema>;
