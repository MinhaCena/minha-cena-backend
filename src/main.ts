import { NestFactory } from '@nestjs/core';
import { AppModule } from './entrypoint/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BaseParameterObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.setBaseViewsDir(join(__dirname, '.', 'templates'));
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle('API - Minha Cena')
    .setDescription(
      'API responsável pelo cadastro e interação na plataforma entre usuários, instituições e ilustradores',
    )
    .setVersion('0.3.0')
    .addTag('users')
    .addTag('institutions')
    .addTag('illustrators')
    .addSecurityRequirements('https')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3080);
}
bootstrap();
