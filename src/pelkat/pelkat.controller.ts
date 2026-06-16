import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PelkatService } from './pelkat.service';
import { CreatePelkatDto } from './dto/create-pelkat.dto';
import { UpdatePelkatDto } from './dto/update-pelkat.dto';

@Controller('pelkat')
export class PelkatController {
  constructor(private readonly pelkatService: PelkatService) {}

  @Post()
  create(@Body() createPelkatDto: CreatePelkatDto) {
    return this.pelkatService.create(createPelkatDto);
  }

  @Get()
  findAll() {
    return this.pelkatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pelkatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePelkatDto: UpdatePelkatDto) {
    return this.pelkatService.update(id, updatePelkatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pelkatService.remove(id);
  }
}
