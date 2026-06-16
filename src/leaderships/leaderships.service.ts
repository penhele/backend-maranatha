import { Injectable } from '@nestjs/common';
import { CreateLeadershipDto } from './dto/create-leadership.dto';
import { UpdateLeadershipDto } from './dto/update-leadership.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeadershipsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLeadershipDto) {
    return this.prisma.leadership.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.leadership.findMany({
      include: {
        congregation: true,
        pelkat: true,
        position: true,
      },
    });
  }

  async update(id: string, dto: UpdateLeadershipDto) {
    return this.prisma.leadership.update({
      data: dto,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.leadership.delete({
      where: { id },
    });
  }
}
