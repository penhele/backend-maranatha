import { Test, TestingModule } from '@nestjs/testing';
import { LeadershipsService } from './leaderships.service';

describe('LeadershipsService', () => {
  let service: LeadershipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadershipsService],
    }).compile();

    service = module.get<LeadershipsService>(LeadershipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
