import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeAnimal } from '../../type-animal/entities/type-animal.entity';
import { TypeAnimalSeederService } from './type-animal-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeAnimal])],
  providers: [TypeAnimalSeederService, Logger],
  exports: [TypeAnimalSeederService],
})
export class TypeAnimalSeederModule {}
