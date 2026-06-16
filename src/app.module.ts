import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegionsModule } from './regions/regions.module';
import { CongregationsModule } from './congregations/congregations.module';
import { PelkatModule } from './pelkat/pelkat.module';
import { PositionsModule } from './positions/positions.module';
import { LeadershipsModule } from './leaderships/leaderships.module';

@Module({
  imports: [
    PrismaModule,
    RegionsModule,
    CongregationsModule,
    PelkatModule,
    PositionsModule,
    LeadershipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
