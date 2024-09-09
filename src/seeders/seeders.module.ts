import { Logger, Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { TypeAnimalSeederModule } from './type-animal-seeder/type-animal-seeder.module';
import { FarmSeederModule } from './farm-seeder/farm-seeder.module';
import { OwnerSeederModule } from './owner-seeder/owner-seeder.module';

@Module({
  imports: [TypeAnimalSeederModule, FarmSeederModule, OwnerSeederModule],
  providers: [Logger, SeedersService],
})
export class SeedersModule {}
