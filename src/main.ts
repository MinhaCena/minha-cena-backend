import { NestFactory } from '@nestjs/core';
import { AppModule } from './entrypoint/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '.', 'templates'));
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle('Documentação API Minha Cena')
    .setDescription(
      'API responsável por cadastrar usuários, instituições e ilustradores',
    )
    .setVersion('0.1.0')
    .addTag('users')
    .addTag('institutions')
    .addTag('illustrators')
    .addTag('emails')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3080);
}
bootstrap();
