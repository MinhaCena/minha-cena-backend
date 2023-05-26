
import { User } from "./user";
import { ApiProperty } from '@nestjs/swagger';


export class Illustrator {
  id: number;
  user?: User;
  @ApiProperty({
    example: 'Marina Silva'
  })
  name: string;
  @ApiProperty({
    example: 'marinasilva@email.com'
  })
  email: string;
  @ApiProperty({
    example: '33856847860'
  })
  cpfCnpj: string;
  @ApiProperty({
    example: '11988759244'
  })
  whatsapp: string;
  @ApiProperty({
    example: 'www.marinasilva.com'
  })
  portfolio: string;
  createdAt: Date;
  updatedAt?: Date;
}
