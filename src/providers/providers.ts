import { UserRepository } from '@infra/database/repositories/user-repository';
import { UserServices } from '@application/services/user-services';

export const providers = [
  {
    provide: UserServices,
    useValue: UserRepository,
  },
];
