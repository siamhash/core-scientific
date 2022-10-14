import { Controller, Get, Param, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('telemetry')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getMiner(@Param('id') id: string) {
    return this.appService.getMiner(id)
  }
}
