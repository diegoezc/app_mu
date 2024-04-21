import { Module } from '@nestjs/common';
import { TypeVaccineService } from './type-vaccine.service';
import { TypeVaccineController } from './type-vaccine.controller';

@Module({
  controllers: [TypeVaccineController],
  providers: [TypeVaccineService],
})
export class TypeVaccineModule {}
