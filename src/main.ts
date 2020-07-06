import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const viewPath = path.join(__dirname, '../views');
    app.setBaseViewsDir(viewPath);
    app.setViewEngine('njk');
    const nunjucksEnv = nunjucks.configure(viewPath, {
        autoescape: true,
        express: app,
    });
  await app.listen(8099);
}


bootstrap();
