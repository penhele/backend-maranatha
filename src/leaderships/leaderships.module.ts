import { Module } from '@nestjs/common';
import { LeadershipsService } from './leaderships.service';
import { LeadershipsController } from './leaderships.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LeadershipsController],
  providers: [LeadershipsService],
})
export class LeadershipsModule {}
