// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Injectable } from '@nestjs/common';
import { UserClient } from "@domain/client/user-client";
import { PrismaService } from '../../database/prisma-service';
import { User } from '@domain/entity/user';

@Injectable()
export class UserRepository implements UserClient {
  constructor(private prismaService: PrismaService) {}
  async create(data: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(data);
    await this.prismaService.user.create({
      data: raw
    });
  }
  async findByEmail(data: User): Promise<null | User> {
    try {
      return await this.prismaService.user.findFirst({
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
