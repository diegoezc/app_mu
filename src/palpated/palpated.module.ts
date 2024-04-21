import { Module } from '@nestjs/common';
import { PalpatedService } from './palpated.service';
import { PalpatedController } from './palpated.controller';

@Module({
  controllers: [PalpatedController],
  providers: [PalpatedService],
})
export class PalpatedModule {}
