// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { PrismaIllustratorMapper } from '../mappers/prisma-illustrator-mapper';
import { Illustrator } from '@domain/entity/illustrator';
import { IllustratorClient } from '@domain/client/Illustrator-client';

@Injectable()
export class IllustratorRepository implements IllustratorClient {
  constructor(private prismaService: PrismaService) {}
  async create(data: Illustrator): Promise<void> {
    const raw = PrismaIllustratorMapper.toPrisma(data);
    try {
      await this.prismaService.illustrator.create({
        data: raw,
      });
    } catch (err: Error) {
      if (err) {
        return null;
      }
    }
  }
  async findByEmail(data: Illustrator): Promise<null | Illustrator> {
    try {
      return await this.prismaService.illustrator.findFirst({
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
  async delete(id: number): Promise<void> {
    try {
      await this.prismaService.illustrator.delete({
        where: { id: +id },
      });
    } catch (err: Error) {
      if (err) {
        return null;
      }
    }
  }
}
