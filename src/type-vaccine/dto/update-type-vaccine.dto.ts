import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeVaccineDto } from './create-type-vaccine.dto';

export class UpdateTypeVaccineDto extends PartialType(CreateTypeVaccineDto) {}
