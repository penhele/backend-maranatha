import { Test, TestingModule } from '@nestjs/testing';
import { LeadershipsController } from './leaderships.controller';
import { LeadershipsService } from './leaderships.service';

describe('LeadershipsController', () => {
  let controller: LeadershipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadershipsController],
      providers: [LeadershipsService],
    }).compile();

    controller = module.get<LeadershipsController>(LeadershipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
