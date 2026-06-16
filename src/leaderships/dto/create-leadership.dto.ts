import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateLeadershipDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  positionId!: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  congregationId!: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  pelkatId!: string;
}
