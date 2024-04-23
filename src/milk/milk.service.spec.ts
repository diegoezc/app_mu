import { Test, TestingModule } from '@nestjs/testing';
import { MilkService } from './milk.service';

describe('MilkService', () => {
  let service: MilkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilkService],
    }).compile();

    service = module.get<MilkService>(MilkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
