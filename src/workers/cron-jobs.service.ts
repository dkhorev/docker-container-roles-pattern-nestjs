import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { CronJob } from '../common/models/cron.job';

@Processor('cron-jobs')
export class CronJobsService {
  protected readonly logger = new Logger(this.constructor.name);

  @Process()
  process(job: Job<CronJob>) {
    this.logger.log(`Cron job result: ${job.data.value}`);
  }
}
