import { Logger, Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { TypeAnimalSeederModule } from './type-animal-seeder/type-animal-seeder.module';

@Module({
  imports: [TypeAnimalSeederModule],
  providers: [Logger, SeedersService],
})
export class SeedersModule {}
