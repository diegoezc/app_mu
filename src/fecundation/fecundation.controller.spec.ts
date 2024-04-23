import { Test, TestingModule } from '@nestjs/testing';
import { FecundationController } from './fecundation.controller';
import { FecundationService } from './fecundation.service';

describe('FecundationController', () => {
  let controller: FecundationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FecundationController],
      providers: [FecundationService],
    }).compile();

    controller = module.get<FecundationController>(FecundationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
