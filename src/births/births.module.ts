import { Module } from '@nestjs/common';
import { BirthsService } from './births.service';
import { BirthsController } from './births.controller';

@Module({
  controllers: [BirthsController],
  providers: [BirthsService],
})
export class BirthsModule {}
