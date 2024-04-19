import { Module } from '@nestjs/common';
import { TypeAnimalService } from './type-animal.service';
import { TypeAnimalController } from './type-animal.controller';

@Module({
  controllers: [TypeAnimalController],
  providers: [TypeAnimalService],
})
export class TypeAnimalModule {}
