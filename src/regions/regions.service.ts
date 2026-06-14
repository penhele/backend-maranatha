import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRegionDto) {
    return this.prisma.region.create({ data: dto });
  }

  async findAll() {
    return this.prisma.region.findMany();
  }

  async findOne(id: string) {
    return this.prisma.region.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: UpdateRegionDto) {
    return this.prisma.region.update({
      data: dto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.region.delete({
      where: { id },
    });
  }
}
