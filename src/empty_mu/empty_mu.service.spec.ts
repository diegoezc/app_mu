import { Test, TestingModule } from '@nestjs/testing';
import { EmptyMuService } from './empty_mu.service';

describe('EmptyMuService', () => {
  let service: EmptyMuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmptyMuService],
    }).compile();

    service = module.get<EmptyMuService>(EmptyMuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
