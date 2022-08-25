import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [ApiController],
})
export class ApiModule {}
