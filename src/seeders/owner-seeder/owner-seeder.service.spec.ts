import { Test, TestingModule } from '@nestjs/testing';
import { OwnerSeederService } from './owner-seeder.service';

describe('OwnerSeederService', () => {
  let service: OwnerSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnerSeederService],
    }).compile();

    service = module.get<OwnerSeederService>(OwnerSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
