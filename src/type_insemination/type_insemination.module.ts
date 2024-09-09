import { Module } from '@nestjs/common';
import { TypeInseminationService } from './type_insemination.service';
import { TypeInseminationController } from './type_insemination.controller';

@Module({
  controllers: [TypeInseminationController],
  providers: [TypeInseminationService],
})
export class TypeInseminationModule {}
