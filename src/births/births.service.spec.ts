import { Test, TestingModule } from '@nestjs/testing';
import { BirthsService } from './births.service';

describe('BirthsService', () => {
  let service: BirthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthsService],
    }).compile();

    service = module.get<BirthsService>(BirthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
