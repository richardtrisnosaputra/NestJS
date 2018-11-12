import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): any {
    //return 'Hello World!';
    return {
      success: 200,
      data: 'Hello World!'
    };
  }
}
