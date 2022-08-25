import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';

@Module({
  providers: [WorkersService],
})
export class WorkersModule {}
