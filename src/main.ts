import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as nunjucks from 'nunjucks';
import { blue } from 'colors';
import { address } from 'ip';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const viewPath = path.join(__dirname, '../views');
    app.setBaseViewsDir(viewPath);
    app.setViewEngine('njk');
    const nunjucksEnv = nunjucks.configure(viewPath, {
        autoescape: true,
        express: app,
    });

  const port = 8109;
  await app.listen(port, () => {
    console.log(
      blue(
        `当前服务运行在 \n http://localhost:${port} \n http://${address()}:${port}`,
      ),
    );
  });
}


bootstrap();
