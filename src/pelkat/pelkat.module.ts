import { Module } from '@nestjs/common';
import { PelkatService } from './pelkat.service';
import { PelkatController } from './pelkat.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PelkatController],
  providers: [PelkatService],
})
export class PelkatModule {}
