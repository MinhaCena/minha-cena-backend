import { UserRepository } from '../infrastructure/database/repositories/user-repository';
import { UserService } from '@domain/service/user-service';
import { UserClient } from '@domain/client/user-client';

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
