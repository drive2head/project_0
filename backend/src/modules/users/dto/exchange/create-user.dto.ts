// import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequestDto {
  // @ApiProperty({ description: 'Логин' })
  login: string;

  // @ApiProperty({ description: 'Пароль' })
  password: string;
}
