import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CongregationService } from './congregation.service';
import { CreateCongregationDto } from './dto/create-congregation.dto';
import { UpdateCongregationDto } from './dto/update-congregation.dto';

@Controller('congregation')
export class CongregationController {
  constructor(private readonly congregationService: CongregationService) {}

  @Post()
  create(@Body() createCongregationDto: CreateCongregationDto) {
    return this.congregationService.create(createCongregationDto);
  }

  @Get()
  findAll() {
    return this.congregationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congregationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCongregationDto: UpdateCongregationDto,
  ) {
    return this.congregationService.update(+id, updateCongregationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.congregationService.remove(+id);
  }
}
