import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @EventPattern('new_login')
  handleNewLogin(data: any) {
    console.log('Estos son los datos que se manda desde el puerto 3000', data);
  }
}
