import { PartialType } from '@nestjs/mapped-types';
import { CreateFecundationDto } from './create-fecundation.dto';

export class UpdateFecundationDto extends PartialType(CreateFecundationDto) {}
