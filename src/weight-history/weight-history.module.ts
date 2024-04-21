import { Module } from '@nestjs/common';
import { WeightHistoryService } from './weight-history.service';
import { WeightHistoryController } from './weight-history.controller';

@Module({
  controllers: [WeightHistoryController],
  providers: [WeightHistoryService],
})
export class WeightHistoryModule {}
