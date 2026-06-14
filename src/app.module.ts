import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CongregationModule } from './congregation/congregation.module';
import { RegionModule } from './region/region.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CongregationModule, RegionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
