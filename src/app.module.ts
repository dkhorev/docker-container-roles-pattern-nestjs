import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { CronModule } from './cron/cron.module';
import { CommonModule } from './common/common.module';
import { WorkersModule } from './workers/workers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ApiModule,
    CronModule,
    CommonModule,
    WorkersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
