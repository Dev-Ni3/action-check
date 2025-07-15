import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      Status: 200,
      message: 'Hello Nitesh and EX',
    };
  }
}
