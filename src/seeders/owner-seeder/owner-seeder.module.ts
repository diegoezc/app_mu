import { Logger, Module } from '@nestjs/common';
import { OwnerSeederService } from './owner-seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';

@Module({
  providers: [OwnerSeederService, Logger],
  imports: [TypeOrmModule.forFeature([Owner])],
  exports: [OwnerSeederService],
})
export class OwnerSeederModule {}
