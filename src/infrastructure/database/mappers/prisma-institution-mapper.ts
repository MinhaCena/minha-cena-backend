import { Institution } from "../../../domain/entity/institution";


export class PrismaInstitutionMapper {
  static toPrisma(institution: Institution) {
    return {
      institution_type: institution.institutionType,
      institution_name: institution.institutionName,
      cnpj_inep: institution.cnpjInep,
      city: institution.city,
      state: institution.state,
      school_type: institution.schoolType,
      institution_email: institution.institutionEmail,
      institution_phone: institution.institutionPhone,
      registrant_name: institution.institutionName,
      registrant_email: institution.registrantEmail,
      registrant_occupation: institution.registrantOccupation,
      registrant_whatsapp: institution.registrantWhatsapp,
      institution_status: institution.institutionStatus
    };
  }
}
