import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as nunjucks from 'nunjucks';
import { blue } from 'colors';
import { address } from 'ip';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const viewPath = path.join(__dirname, '..', 'views');
  app.setBaseViewsDir(viewPath);
  app.setViewEngine('njk');
  //设置静态文件存放文件夹
  //设置虚拟目录http://localhost:3000/static/a.png
  app.useStaticAssets(path.join(__dirname, '..', 'static', 'assets'), {
    prefix: '/assets/',
  });

  const nunjucksEnv = nunjucks.configure(viewPath, {
      noCache:true,
      autoescape: true,
      express: app,
  });

  const port = 8109;
  const baseUrl = "http://localhost:8190";
  nunjucksEnv.addGlobal('jsPath', baseUrl);


  await app.listen(port, () => {
    console.log(
      blue(
        `当前服务运行在 \n http://${address()}:${port}`,
      ),
    );
  });
}


bootstrap();
