import { Test, TestingModule } from '@nestjs/testing';
import { BatchSeederService } from './batch-seeder.service';

describe('BatchSeederService', () => {
  let service: BatchSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatchSeederService],
    }).compile();

    service = module.get<BatchSeederService>(BatchSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
