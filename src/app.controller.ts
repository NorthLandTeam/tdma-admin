import { Controller, Get,Res,Body,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SigninDto } from './dto/signin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/home")
  async home(@Res() res){
    return res.render("dashboard");
  }

  @Get()
  async index(@Res() res){
    return res.render("signin");
  }

  @Post('/signin')
  async signin(@Body() signinDto: SigninDto, @Res() res){
    if (signinDto.username !== 'admin' || signinDto.password !== 'admin123') {
      res.json({
            message: '账户名或密码错误（admin/admin123）'
        });
    } else {
      res.json({
            message: '登陆成功'
        });
    }
  }

}
