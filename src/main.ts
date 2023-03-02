import { NestFactory } from '@nestjs/core';
import { AppModule } from "@entrypoint/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3080);
}
bootstrap();
