import { Module } from '@nestjs/common';
import { UserController } from '@helpers/http/controllers/user-controller';
import { UserRepository } from '@infra/database/repositories/user-repository';
import { providers } from '../providers/providers';
import { serviceProviders } from '../providers/service-providers';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...providers, ...serviceProviders, UserRepository],
})
export class AppModule {}
