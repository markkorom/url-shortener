import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class PostUrlDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
