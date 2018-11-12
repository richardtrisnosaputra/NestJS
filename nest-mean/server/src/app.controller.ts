import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('root') 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world') //localhost:3000/root/hello-world
  root(): any {
    return this.appService.root();
  }
}
