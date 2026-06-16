import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadershipDto } from './create-leadership.dto';

export class UpdateLeadershipDto extends PartialType(CreateLeadershipDto) {}
