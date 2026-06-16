import { Test, TestingModule } from '@nestjs/testing';
import { PelkatService } from './pelkat.service';

describe('PelkatService', () => {
  let service: PelkatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelkatService],
    }).compile();

    service = module.get<PelkatService>(PelkatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
