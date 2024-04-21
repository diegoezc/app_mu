import { Test, TestingModule } from '@nestjs/testing';
import { WeightHistoryController } from './weight-history.controller';
import { WeightHistoryService } from './weight-history.service';

describe('WeightHistoryController', () => {
  let controller: WeightHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeightHistoryController],
      providers: [WeightHistoryService],
    }).compile();

    controller = module.get<WeightHistoryController>(WeightHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
