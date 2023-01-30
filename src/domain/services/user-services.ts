import { Injectable } from '@nestjs/common';
import { UserClient } from '@application/client/user-client';
import { User } from '@application/entities/user';
import { UserRepository } from "@infra/database/repositories/user-repository";

@Injectable()
export class UserServices {
  constructor(private userClient: UserRepository) {}
  async createUser(data: User) {
    const user = await this.userClient.create(data);
    return user;
  }
}
