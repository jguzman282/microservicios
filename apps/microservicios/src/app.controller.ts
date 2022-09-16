import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newLogin(@Body() body: any): string {
    return this.appService.newLogin(body);
  }
}
