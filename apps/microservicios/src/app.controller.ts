import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async newLogin(@Body() body: any, @Res() res: any, @Req() req: any) {
    const respuesta = await this.appService.newLogin(body, res);

    res.send(respuesta);
    //  return this.appService.newLogin(body);
  }
}
