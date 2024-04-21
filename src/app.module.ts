import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSource } from 'db/data-source';
import { FarmModule } from './farm/farm.module';
import { TypeAnimalModule } from './type-animal/type-animal.module';
import { AnimalModule } from './animal/animal.module';
import { BatchModule } from './batch/batch.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { WeightHistoryModule } from './weight-history/weight-history.module';
import { TypeVaccineModule } from './type-vaccine/type-vaccine.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { DoseModule } from './dose/dose.module';
import { PalpatedModule } from './palpated/palpated.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseSource),
    OwnerModule,
    FarmModule,
    TypeAnimalModule,
    AnimalModule,
    BatchModule,
    MedicalHistoryModule,
    WeightHistoryModule,
    TypeVaccineModule,
    VaccineModule,
    DoseModule,
    PalpatedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
