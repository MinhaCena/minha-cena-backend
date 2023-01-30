import { User } from '@application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      unLocked: user.unLocked,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
