// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '@infra/database/mappers/prisma-user-mapper';
import { User } from '@application/entities/user';
import { UserClient } from '@application/client/user-client';
import { PrismaService } from '@infra/database/prisma-service';

@Injectable()
export class UserRepository implements UserClient {
  constructor(private prismaService: PrismaService) {}
  async create(data: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(data);
    await this.prismaService.users.create({
      data: raw,
    });
  }
  async findByEmail(data: User): Promise<null | User> {
    try {
      return await this.prismaService.users.findFirst({
        where: {
          email: data.email,
        },
      });
    } catch (err: Error) {
      if (err) {
        return null;
      }
    }
  }
}
