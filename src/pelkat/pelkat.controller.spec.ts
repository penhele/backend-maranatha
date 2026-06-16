import { Test, TestingModule } from '@nestjs/testing';
import { PelkatController } from './pelkat.controller';
import { PelkatService } from './pelkat.service';

describe('PelkatController', () => {
  let controller: PelkatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelkatController],
      providers: [PelkatService],
    }).compile();

    controller = module.get<PelkatController>(PelkatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
