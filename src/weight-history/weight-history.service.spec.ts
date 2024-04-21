import { Test, TestingModule } from '@nestjs/testing';
import { WeightHistoryService } from './weight-history.service';

describe('WeightHistoryService', () => {
  let service: WeightHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightHistoryService],
    }).compile();

    service = module.get<WeightHistoryService>(WeightHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
