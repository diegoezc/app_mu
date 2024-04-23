import { Test, TestingModule } from '@nestjs/testing';
import { FecundationService } from './fecundation.service';

describe('FecundationService', () => {
  let service: FecundationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FecundationService],
    }).compile();

    service = module.get<FecundationService>(FecundationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
