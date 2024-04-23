import { Test, TestingModule } from '@nestjs/testing';
import { EmptyMuController } from './empty_mu.controller';
import { EmptyMuService } from './empty_mu.service';

describe('EmptyMuController', () => {
  let controller: EmptyMuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmptyMuController],
      providers: [EmptyMuService],
    }).compile();

    controller = module.get<EmptyMuController>(EmptyMuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
