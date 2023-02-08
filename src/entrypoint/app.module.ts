import { Module } from '@nestjs/common';
import { UserRepository } from '../infrastructure/database/repositories/user-repository';
import { providers } from '../providers/providers';
import { serviceProviders } from '../providers/service-providers';
import { UserController } from '@entrypoint/http/controllers/user-controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...providers, ...serviceProviders, UserRepository],
})
export class AppModule {}
