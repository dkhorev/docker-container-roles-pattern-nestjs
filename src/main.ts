import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApiModule } from './api/api.module';
import { CronModule } from './cron/cron.module';
import { WorkersModule } from './workers/workers.module';

async function bootstrap() {
  const role = process.env.CONTAINER_ROLE || 'api';
  let port = process.env.PORT || 3000;

  let loader;
  switch (role) {
    case 'api':
      loader = ApiModule;
      break;
    case 'cron':
      loader = CronModule;
      port = 3001; // only required for localhost testing
      break;
    case 'workers':
      loader = WorkersModule;
      port = 3002; // only required for localhost testing
      break;
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    loader,
    new FastifyAdapter(),
  );

  const logger = new Logger();
  logger.log(`Container role: ${role}`);

  await app.listen(port, '0.0.0.0');
}
bootstrap();
