import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateCongregationDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsPhoneNumber('ID')
  phone!: string;

  @Type(() => Date)
  @IsDate()
  birth!: Date;

  @IsUUID()
  regionId!: string;

  @IsUUID()
  pelkatId!: string;
}
