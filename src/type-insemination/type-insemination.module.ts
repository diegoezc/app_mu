import { Module } from '@nestjs/common';
import { TypeInseminationService } from './type-insemination.service';
import { TypeInseminationController } from './type-insemination.controller';

@Module({
  controllers: [TypeInseminationController],
  providers: [TypeInseminationService],
})
export class TypeInseminationModule {}
