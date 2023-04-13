import { Module } from '@nestjs/common';
import { UserRepository } from "@infrastructure/database/repositories/user-repository";
import { providers } from '../providers/providers';
import { serviceProviders } from '../providers/service-providers';
import { UserController } from '@entrypoint/http/controllers/user-controller';
import { InstitutionRepository } from "@infrastructure/database/repositories/institution-repository";
import { InstitutionController } from "@entrypoint/http/controllers/institution-controller";

@Module({
  imports: [],
  controllers: [UserController, InstitutionController],
  providers: [...providers, ...serviceProviders, UserRepository, InstitutionRepository],
})
export class AppModule {}
