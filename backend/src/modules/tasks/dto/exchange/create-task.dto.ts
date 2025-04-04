// import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskRequestDto {
  // @ApiProperty({ description: 'Название' })
  title: string;

  // @ApiProperty({ description: 'ID автора задачи' })
  createdById: string;
}
