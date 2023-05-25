import { Module } from '@nestjs/common';
import { providers } from '../providers/providers';
import { serviceProviders } from '../providers/service-providers';
import { UserController } from '@entrypoint/http/controllers/user-controller';
import { InstitutionRepository } from "@infrastructure/database/repositories/institution-repository";
import { InstitutionController } from "@entrypoint/http/controllers/institution-controller";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ConfigModule } from "@nestjs/config";
import { UserRepository } from "@infrastructure/database/repositories/user-repository";
import { IllustratorController } from './http/controllers/illustrator-controller';
import { IllustratorRepository } from '@infrastructure/database/repositories/illustrator-repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [UserController, InstitutionController, IllustratorController],
  providers: [...providers, ...serviceProviders, UserRepository, InstitutionRepository, IllustratorRepository],
})
export class AppModule {}
