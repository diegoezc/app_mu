import { Module } from '@nestjs/common';
import { DoseService } from './dose.service';
import { DoseController } from './dose.controller';

@Module({
  controllers: [DoseController],
  providers: [DoseService],
})
export class DoseModule {}
