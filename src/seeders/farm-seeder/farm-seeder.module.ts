import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSeederService } from './farm-seeder.service';
import { Farm } from 'src/farm/entities/farm.entity';

@Module({
  providers: [FarmSeederService, Logger],
  imports: [TypeOrmModule.forFeature([Farm])],
  exports: [FarmSeederService],
})
export class FarmSeederModule {}
