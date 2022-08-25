import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { WorkersService } from './workers.service';

@Module({
  imports: [CommonModule],
  providers: [WorkersService],
})
export class WorkersModule {}
