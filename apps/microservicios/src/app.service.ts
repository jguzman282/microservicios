import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
var ActiveDirectory = require('activedirectory');
const AD = require('ad');

var config = {
  url: 'ldap://ucse.net.ar',
  baseDN: 'dc=ucse.net.ar,dc=com',
};
// var ad = new ActiveDirectory(config);
// var username = 'bruno.alancay@ucse.net.ar';
// var password = 'Ucse2022';

const ad = new AD({
  url: 'ldap://ucse.net.ar',
  user: 'petersen.mario@ucse.net.ar',
  pass: '123456789',
});

@Injectable()
export class AppService {
  constructor(@Inject('LOGIN_SERVICE') private clientLogin: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async newLogin(data: any, res: any) {
    console.log('usuario', data);

    const result = await ad.user('joaquin.guzman').authenticate('Ucse20224');
    console.log('resultado', result);

    return result;
  }
}
