import { Injectable } from '@nestjs/common';
import { CreateCongregationDto } from './dto/create-congregation.dto';
import { UpdateCongregationDto } from './dto/update-congregation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CongregationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCongregationDto) {
    return this.prisma.congregation.create({ data: dto });
  }

  async findAll() {
    return this.prisma.congregation.findMany();
  }

  async findOne(id: string) {
    return this.prisma.congregation.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: UpdateCongregationDto) {
    return this.prisma.congregation.update({
      data: dto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.congregation.delete({
      where: { id },
    });
  }
}
