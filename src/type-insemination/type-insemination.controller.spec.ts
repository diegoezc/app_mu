import { Test, TestingModule } from '@nestjs/testing';
import { TypeInseminationController } from './type-insemination.controller';
import { TypeInseminationService } from './type-insemination.service';

describe('TypeInseminationController', () => {
  let controller: TypeInseminationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeInseminationController],
      providers: [TypeInseminationService],
    }).compile();

    controller = module.get<TypeInseminationController>(TypeInseminationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
