import { Test, TestingModule } from '@nestjs/testing';
import { TypeVaccineService } from './type-vaccine.service';

describe('TypeVaccineService', () => {
  let service: TypeVaccineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeVaccineService],
    }).compile();

    service = module.get<TypeVaccineService>(TypeVaccineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
