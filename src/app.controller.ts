import { Controller, Get,Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/index")
  async index(@Res() res){
    return res.render("index");
  }

  @Get("/signin")
  async signin(@Res() res){
    return res.render("signin");
  }
}
