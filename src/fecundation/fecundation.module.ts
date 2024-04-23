import { Module } from '@nestjs/common';
import { FecundationService } from './fecundation.service';
import { FecundationController } from './fecundation.controller';

@Module({
  controllers: [FecundationController],
  providers: [FecundationService],
})
export class FecundationModule {}
