import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bull';
import { randomUUID } from 'crypto';

@Injectable()
export class CronService {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(@InjectQueue('cron-jobs') private cronJobsQueue: Queue) {}

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    const uuid = randomUUID();
    this.logger.log(`Queing job: ${uuid}`);
    this.cronJobsQueue.add({ value: uuid });
  }
}
