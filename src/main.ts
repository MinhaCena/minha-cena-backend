import { NestFactory } from '@nestjs/core';
import { AppModule } from "@entrypoint/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '.', 'templates'));
  app.setViewEngine('hbs');
  await app.listen(3080);
}
bootstrap();
