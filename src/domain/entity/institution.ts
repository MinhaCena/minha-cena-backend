import { User } from "./user";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


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
  @ApiPropertyOptional({
    example: 1,
  })
  schoolType?: number;
  @ApiPropertyOptional({
    example: 'colegionossasenhoradasdores@email.com',
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
    example: '11966780598'
  })
  registrantWhatsapp: string;
  @ApiProperty({
    example: 1
  })
  institutionStatus: number;
  createAt: Date;
  updatedAt?: Date;
}
