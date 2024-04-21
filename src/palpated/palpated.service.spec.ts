import { Test, TestingModule } from '@nestjs/testing';
import { PalpatedService } from './palpated.service';

describe('PalpatedService', () => {
  let service: PalpatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalpatedService],
    }).compile();

    service = module.get<PalpatedService>(PalpatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
