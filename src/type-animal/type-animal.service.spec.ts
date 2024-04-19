import { Test, TestingModule } from '@nestjs/testing';
import { TypeAnimalService } from './type-animal.service';

describe('TypeAnimalService', () => {
  let service: TypeAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeAnimalService],
    }).compile();

    service = module.get<TypeAnimalService>(TypeAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
