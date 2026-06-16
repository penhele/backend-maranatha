import { PartialType } from '@nestjs/mapped-types';
import { CreatePelkatDto } from './create-pelkat.dto';

export class UpdatePelkatDto extends PartialType(CreatePelkatDto) {}
