import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path';
import { AppModule } from "./entrypoint/app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '.', 'templates'));
  app.setViewEngine('hbs');
  await app.listen(3080);
}
bootstrap();
