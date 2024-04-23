import { Test, TestingModule } from '@nestjs/testing';
import { MilkController } from './milk.controller';
import { MilkService } from './milk.service';

describe('MilkController', () => {
  let controller: MilkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilkController],
      providers: [MilkService],
    }).compile();

    controller = module.get<MilkController>(MilkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
