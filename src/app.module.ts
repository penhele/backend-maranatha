import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegionsModule } from './regions/regions.module';
import { CongregationsModule } from './congregations/congregations.module';

@Module({
  imports: [PrismaModule, RegionsModule, CongregationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
