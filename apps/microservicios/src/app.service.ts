import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOGIN_SERVICE') private clientLogin: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  newLogin(user: any) {
    this.clientLogin.emit('new_login', user);
    return 'send_queue';
  }
}
