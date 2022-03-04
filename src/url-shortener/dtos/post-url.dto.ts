import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class PostUrlDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
