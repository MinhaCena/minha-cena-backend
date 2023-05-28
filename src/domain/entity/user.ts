import { ApiProperty } from '@nestjs/swagger';

export class User {
  id: number;
  @ApiProperty({
    example: 'mauroalmeida@email.com'
  })
  email: string;
  @ApiProperty({
    example: '345906'
  })
  password: string;
  @ApiProperty({
    example: 1
  })
  role: number;
  @ApiProperty({
    example: 1
  })
  confirmed: number;
  unLocked?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
