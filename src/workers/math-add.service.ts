import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { MatdAddJob } from '../common/models/matd-add.job';

@Processor('math-add')
export class MathAddService {
  protected readonly logger = new Logger(this.constructor.name);

  @Process()
  process(job: Job<MatdAddJob>) {
    this.logger.log(
      `Result job: math add ${job.data.a} and ${job.data.b} equals ${
        job.data.a + job.data.b
      }`,
    );
  }
}
