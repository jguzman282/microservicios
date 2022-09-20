import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
var ActiveDirectory = require('activedirectory');

var ActiveDirectory = require('activedirectory');
var config = {
  url: 'ldap://ucse.net.ar',
  baseDN: 'dc=ucse.net.ar,dc=com',
};
var ad = new ActiveDirectory(config);
var username = 'joaquin.guzman@ucse.net.ar';
var password = 'Ucse2022';

@Injectable()
export class AppService {
  constructor(@Inject('LOGIN_SERVICE') private clientLogin: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  newLogin(user: any) {
    this.clientLogin.emit('new_login', user);

    // Authenticate
    ad.authenticate(username, password, function (err, auth) {
      if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        console.log('NO SE CONECTO NADAAAAAAAA');
        return 'no se conecto';
      }
      if (auth) {
        console.log('Authenticated!', auth);
      } else {
        console.log('Authentication failed!');
      }
    });
    return 'send_queue';
  }
}
