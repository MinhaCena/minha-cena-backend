// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma-service';
import { PrismaInstitutionMapper } from '../mappers/prisma-institution-mapper';
import { Institution } from '@domain/entity/institution';
import { InstitutionClient } from "@domain/client/institution-client";

@Injectable()
export class InstitutionRepository implements InstitutionClient{
  constructor(private prismaService: PrismaService) {}
  async create(data: Institution): Promise<void> {
    const raw = PrismaInstitutionMapper.toPrisma(data);
    try {
      await this.prismaService.institution.create({
        data: raw,
      });
    } catch (err: Error) {
      if (err) {
        return err;
      }
    }
  }
  async findByEmail(data: Institution): Promise<null | Institution> {
    try {
      return await this.prismaService.institution.findFirst({
        where: {
          institution_email: data.institutionEmail
        }
      })
    } catch (err: Error) {
      if (err) {
        return null;
      }
    }
  }
  async updatedStatusInstitution(data: Institution) : Promise<null | Institution| undefined>{
    try {
      const raw = PrismaInstitutionMapper.toPrisma(data);
      return await this.prismaService.institution.update({
        where: {
          id: raw.institution_status,
        },
        data: {
          institution_status: 1,
        },
      })
    } catch (err: Error){
      if(err) {
        return undefined
      }
    }
  }
}
