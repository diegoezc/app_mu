import { Test, TestingModule } from '@nestjs/testing';
import { PalpatedController } from './palpated.controller';
import { PalpatedService } from './palpated.service';

describe('PalpatedController', () => {
  let controller: PalpatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalpatedController],
      providers: [PalpatedService],
    }).compile();

    controller = module.get<PalpatedController>(PalpatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
