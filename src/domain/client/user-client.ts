import { User } from '@application/entities/user';

export abstract class UserClient {
  abstract create(data: User): Promise<void>;
  abstract findByEmail(data: User): Promise<void>;
}
