import { Test, TestingModule } from '@nestjs/testing';
import { TypeAnimalController } from './type-animal.controller';
import { TypeAnimalService } from './type-animal.service';

describe('TypeAnimalController', () => {
  let controller: TypeAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeAnimalController],
      providers: [TypeAnimalService],
    }).compile();

    controller = module.get<TypeAnimalController>(TypeAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
