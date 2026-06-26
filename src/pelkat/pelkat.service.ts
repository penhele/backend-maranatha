import { Injectable } from '@nestjs/common';
import { CreatePelkatDto } from './dto/create-pelkat.dto';
import { UpdatePelkatDto } from './dto/update-pelkat.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PelkatService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePelkatDto) {
    return this.prisma.pelkat.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.pelkat.findMany({
      include: {
        congregations: {
          include: {
            region: true,
          },
        },
        _count: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.pelkat.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdatePelkatDto) {
    return this.prisma.pelkat.update({
      data: dto,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.pelkat.delete({
      where: { id },
    });
  }
}
