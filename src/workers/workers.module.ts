import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { CronJobsService } from './cron-jobs.service';
import { MathAddService } from './math-add.service';

@Module({
  imports: [CommonModule],
  providers: [MathAddService, CronJobsService],
})
export class WorkersModule {}
