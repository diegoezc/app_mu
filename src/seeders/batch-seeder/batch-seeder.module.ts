import { Logger, Module } from '@nestjs/common';
import { BatchSeederService } from './batch-seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from 'src/batch/entities/batch.entity';

@Module({
  providers: [BatchSeederService, Logger],
  imports: [TypeOrmModule.forFeature([Batch])],
  exports: [BatchSeederService],
})
export class BatchSeederModule {}
