import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PositionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePositionDto) {
    return this.prisma.position.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.position.findMany();
  }

  async update(id: string, dto: UpdatePositionDto) {
    return this.prisma.position.update({
      data: dto,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.position.delete({
      where: { id },
    });
  }
}
