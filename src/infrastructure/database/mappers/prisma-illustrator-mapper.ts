import { Illustrator } from '../../../domain/entity/illustrator';
import { Illustrator as PrismaIllustrator } from '@prisma/client';

export class PrismaIllustratorMapper {
  static toPrisma(illustrator: Illustrator) {
    return {
      name: illustrator.name,
      email: illustrator.email,
      cpf_cnpj: illustrator.cpfCnpj,
      whatsapp: illustrator.whatsapp,
      portfolio: illustrator.portfolio,
    };
  }

  static toEntity(illustrator: PrismaIllustrator) {
    return {
      name: illustrator.name,
      email: illustrator.email,
      cpfCnpj: illustrator.cpf_cnpj,
      whatsapp: illustrator.whatsapp,
      portfolio: illustrator.portfolio,
    };
  }
}
