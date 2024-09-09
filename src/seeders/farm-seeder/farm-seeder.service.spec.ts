import { Test, TestingModule } from '@nestjs/testing';
import { FarmSeederService } from './farm-seeder.service';

describe('FarmSeederService', () => {
  let service: FarmSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmSeederService],
    }).compile();

    service = module.get<FarmSeederService>(FarmSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
