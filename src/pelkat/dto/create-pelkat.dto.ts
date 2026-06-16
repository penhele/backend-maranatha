import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePelkatDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
