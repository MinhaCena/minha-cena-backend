import { UserRepository } from '@infra/database/repositories/user-repository';
import { UserService } from '@application/services/user-service';
import { UserClient } from '@application/client/user-client';

export const providers = [
  {
    provide: UserService,
    useValue: UserRepository,
  },
  {
    provide: UserClient,
    useClass: UserRepository,
  },
];
