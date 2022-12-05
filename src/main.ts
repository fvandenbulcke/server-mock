import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { AppModule } from './app.module';
import './views/hb-helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.useStaticAssets(path.join(__dirname, '..', 'views'));

  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
