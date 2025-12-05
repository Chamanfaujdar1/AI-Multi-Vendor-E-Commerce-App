// prisma.config.ts
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations', // optional, but nice to be explicit
  },
  datasource: {
    // This replaces url / directUrl in schema.prisma
    url: env('DATABASE_URL'),
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL'), // if you use it
  },
});
