import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeInseminationDto } from './create-type-insemination.dto';

export class UpdateTypeInseminationDto extends PartialType(CreateTypeInseminationDto) {}
