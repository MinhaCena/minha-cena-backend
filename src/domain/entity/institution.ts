import { User } from "./user";
import { ApiProperty } from '@nestjs/swagger';


export class Institution {
  id: number;
  user?: User;
  @ApiProperty({
    example: 1
  })
  institutionType: number;
  @ApiProperty({
    example: 'Colégio Nossa Senhora das Dores'
  })
  institutionName: string;
  @ApiProperty({
    example: '22587941000160'
  })
  cnpjInep: string;
  @ApiProperty({
    example: 'São Paulo'
  })
  city: string;
  @ApiProperty({
    example: 'São Paulo'
  })
  state: string;
  @ApiProperty({
    example: 1,
    required: false
  })
  schoolType?: number;
  @ApiProperty({
    example: 'colegionossasenhoradasdores@email.com',
    required: false
  })
  institutionEmail?: string;
  @ApiProperty({
    example: '1138581317',
  })
  institutionPhone: string;
  @ApiProperty({
    example: 'Vitória Souza'
  })
  registrantName: string;
  @ApiProperty({
    example: 'vitoriasouza@email.com'
  })
  registrantEmail: string;
  @ApiProperty({
    example: 'Diretora'
  })
  registrantOccupation: string;
  @ApiProperty({
    example: 'São 11966780598'
  })
  registrantWhatsapp: string;
  @ApiProperty({
    example: 1
  })
  institutionStatus: number;
  createAt: Date;
  updatedAt?: Date;
}
