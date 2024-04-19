import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeAnimalDto } from './create-type-animal.dto';

export class UpdateTypeAnimalDto extends PartialType(CreateTypeAnimalDto) {}
