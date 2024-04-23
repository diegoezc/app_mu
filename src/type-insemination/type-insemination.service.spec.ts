import { Test, TestingModule } from '@nestjs/testing';
import { TypeInseminationService } from './type-insemination.service';

describe('TypeInseminationService', () => {
  let service: TypeInseminationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeInseminationService],
    }).compile();

    service = module.get<TypeInseminationService>(TypeInseminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
