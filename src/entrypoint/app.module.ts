import { Module } from '@nestjs/common';
import { providers } from '../providers/providers';
import { serviceProviders } from '../providers/service-providers';


import { EventEmitterModule } from "@nestjs/event-emitter";
import { ConfigModule } from "@nestjs/config";

import { IllustratorController } from './http/controllers/illustrator-controller';
import { UserController } from "./http/controllers/user-controller";
import { InstitutionController } from "./http/controllers/institution-controller";
import { UserRepository } from "../infrastructure/database/repositories/user-repository";
import { InstitutionRepository } from "../infrastructure/database/repositories/institution-repository";
import { IllustratorRepository } from "../infrastructure/database/repositories/illustrator-repository";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [UserController, InstitutionController, IllustratorController],
  providers: [
    ...providers,
    ...serviceProviders,
    UserRepository,
    InstitutionRepository,
    IllustratorRepository,
  ],
})
export class AppModule {}
