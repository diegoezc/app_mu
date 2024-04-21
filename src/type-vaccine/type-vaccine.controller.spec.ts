import { Test, TestingModule } from '@nestjs/testing';
import { TypeVaccineController } from './type-vaccine.controller';
import { TypeVaccineService } from './type-vaccine.service';

describe('TypeVaccineController', () => {
  let controller: TypeVaccineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeVaccineController],
      providers: [TypeVaccineService],
    }).compile();

    controller = module.get<TypeVaccineController>(TypeVaccineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
