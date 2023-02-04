import { UserRepository } from '@infra/database/repositories/user-repository';
import { UserServices } from '@application/services/user-services';
import { UserClient } from '@application/client/user-client';

export const providers = [
  {
    provide: UserServices,
    useValue: UserRepository,
  },
  {
    provide: UserClient,
    useClass: UserRepository,
  },
];
