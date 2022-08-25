import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { CronModule } from './cron/cron.module';
import { WorkersModule } from './workers/workers.module';

async function bootstrap() {
  const role = process.env.CONTAINER_ROLE || 'api';

  let loader;
  switch (role) {
    case 'api':
      loader = ApiModule;
      break;
    case 'cron':
      loader = CronModule;
      break;
    case 'workers':
      loader = WorkersModule;
      break;
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    loader,
    new FastifyAdapter(),
  );

  const logger = new Logger();
  logger.log(`Container role: ${role}`);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
