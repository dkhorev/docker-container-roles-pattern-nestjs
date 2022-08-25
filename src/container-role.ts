import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApiModule } from './api/api.module';
import { CronModule } from './cron/cron.module';
import { WorkersModule } from './workers/workers.module';

export const rolesMapBootstrap = {
  api: async () => {
    const port = process.env.PORT || 3000;

    const app = await NestFactory.create<NestFastifyApplication>(
      ApiModule,
      new FastifyAdapter(),
    );

    await app.listen(port, '0.0.0.0');

    return app;
  },
  cron: async () => {
    return await NestFactory.createApplicationContext(CronModule);
  },
  workers: async () => {
    return await NestFactory.createApplicationContext(WorkersModule);
  },
};
