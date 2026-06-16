import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeadershipsService } from './leaderships.service';
import { CreateLeadershipDto } from './dto/create-leadership.dto';
import { UpdateLeadershipDto } from './dto/update-leadership.dto';

@Controller('leaderships')
export class LeadershipsController {
  constructor(private readonly leadershipsService: LeadershipsService) {}

  @Post()
  create(@Body() createLeadershipDto: CreateLeadershipDto) {
    return this.leadershipsService.create(createLeadershipDto);
  }

  @Get()
  findAll() {
    return this.leadershipsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeadershipDto: UpdateLeadershipDto,
  ) {
    return this.leadershipsService.update(id, updateLeadershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadershipsService.remove(id);
  }
}
