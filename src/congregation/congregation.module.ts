import { Module } from '@nestjs/common';
import { CongregationService } from './congregation.service';
import { CongregationController } from './congregation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CongregationController],
  providers: [CongregationService],
})
export class CongregationModule {}
