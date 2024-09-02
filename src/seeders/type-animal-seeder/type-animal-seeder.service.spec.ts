import { Test, TestingModule } from '@nestjs/testing';
import { TypeAnimalSeederService } from './type-animal-seeder.service';

describe('TypeAnimalSeederService', () => {
  let service: TypeAnimalSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeAnimalSeederService],
    }).compile();

    service = module.get<TypeAnimalSeederService>(TypeAnimalSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
