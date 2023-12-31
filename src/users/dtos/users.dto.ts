// Libs
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  photo?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
