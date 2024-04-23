import { Test, TestingModule } from '@nestjs/testing';
import { BirthsController } from './births.controller';
import { BirthsService } from './births.service';

describe('BirthsController', () => {
  let controller: BirthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirthsController],
      providers: [BirthsService],
    }).compile();

    controller = module.get<BirthsController>(BirthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
