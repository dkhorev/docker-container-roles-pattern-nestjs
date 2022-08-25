import { Controller, Get, Param } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('add/:a/:b')
  mathAdd(@Param('a') a: number, @Param('b') b: number): string {
    return `${+a} and ${+b}`;
  }
}
