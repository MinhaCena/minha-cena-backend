import { User } from "@domain/entity/user";


export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role,
      confirmed: user.confirmed,
      unLocked: user.unLocked,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
