import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Logger, Param } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('api')
export class ApiController {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(@InjectQueue('math-add') private mathAddQueue: Queue) {}

  @Get('add/:a/:b')
  mathAdd(@Param('a') a: number, @Param('b') b: number): void {
    this.logger.log(`Queing job: math add ${a} and ${b}`);
    this.mathAddQueue.add({ a: +a, b: +b });
  }
}
